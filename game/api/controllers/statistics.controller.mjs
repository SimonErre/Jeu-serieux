import {HttpStatus} from "#structs/route.mjs";
import {getModel} from "#db/index.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";

export async function createStat (res, payload) {
  const { label, defaultScore } = payload
  if (!label) return res.status(HttpStatus.BAD_REQUEST).json('Label not is missing!')
  if (!defaultScore) return res.status(HttpStatus.BAD_REQUEST).json('Default score is missing!')

  try {
    res.status(HttpStatus.CREATED).json(await getModel('statistic').create({
      label,
      defaultScore
    }))
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function deleteStat (res, payload) {
  if (!payload) return res.status(HttpStatus.BAD_REQUEST).json()
  const model = getModel('statistic')

  try {
    const stat = await model.findByPk(payload)
    if (!stat) return res.status(HttpStatus.NOT_FOUND).json()
    await model.destroy({ where: { id: payload } })
    res.json(stat)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getStat (res, payload) {
  if (!payload) return res.status(HttpStatus.BAD_REQUEST).json()

  try {
    const stat = await getModel('statistic').findByPk(payload)
    if (!stat) return res.status(HttpStatus.NOT_FOUND).json()
    res.json(stat)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getStatsList (res, options) {
  try {
    const list = await getModel('statistic').findAll(options)
    if (list.length === 0) return res.status(HttpStatus.NO_CONTENT).json()
    res.json(list)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
