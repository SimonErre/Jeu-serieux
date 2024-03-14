import enums from "#utils/enums.mjs";
import {HttpStatus} from "#structs/route.mjs";
import {getModel} from "#db/index.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";
import {randomString} from "#utils/strings.mjs";

export async function createSession (res, payload) {
  const { name, gender, skin, csp } = payload
  // Presence
  if (!name) return res.status(HttpStatus.BAD_REQUEST).json('No session name provided!')
  if (!gender) return res.status(HttpStatus.BAD_REQUEST).json('No gender provided!')
  if (!skin) return res.status(HttpStatus.BAD_REQUEST).json('No skin provided!')
  if (!csp) return res.status(HttpStatus.BAD_REQUEST).json('No CSP provided!')
  // Authenticity
  if (!enums.genders.includes(gender)) return res.status(HttpStatus.BAD_REQUEST).json(`"${gender}" is not a valid gender value!`)
  if (!enums.skins.includes(skin)) return res.status(HttpStatus.BAD_REQUEST).json(`"${skin}" is not a valid skin value!`)
  if (!enums.csps.includes(csp)) return res.status(HttpStatus.BAD_REQUEST).json(`"${csp}" is not a valid CSP value!`)

  const code = randomString(8)

  // Create
  try {
    const character = await getModel('character').findOne({
      where: {
        skin,
        csp,
        gender
      }
    })
    if (!character) return res.status(HttpStatus.NOT_FOUND).json()
    const stats = await getModel('statistic').findAll()
    res.status(HttpStatus.CREATED).json(await getModel('session').create({
      code,
      name,
      characterName: character.name
    }))
    if (stats.length !== 0)
      for (let s of stats) {
        await getModel('sessionStat').create({
          sessionCode: code,
          statisticId: s.id,
          score: s.defaultScore
        })
      }
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(`Session "${code}" already exists!"`)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getSession (res, payload) {
  if (!payload) return res.status(HttpStatus.BAD_REQUEST).json('No code provided!')

  try {
    const resSession = await getModel('session').findByPk(payload)
    if (!resSession) return res.status(HttpStatus.NOT_FOUND).json()
    const session = resSession.toJSON()
    session.resume = await getModel('sessionStat').findAll({ where: { sessionCode: payload } })

    res.json(session)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function deleteSession (res, payload) {
  if (!payload) return res.status(HttpStatus.BAD_REQUEST)
  const model = getModel('session')

  try {
    const session = await model.findByPk(payload)
    if (!session) return res.status(HttpStatus.NOT_FOUND).json()
    await model.destroy({ where: { code: payload } })
    res.json(session)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
