import {getModel} from "#db/index.mjs";
import {HttpStatus} from "#structs/route.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";

export async function createCharacter (res, payload) {
  const { name, gender, skin, csp } = payload
  if (!name) return res.status(HttpStatus.BAD_REQUEST).json('Name is missing!')
  if (!gender) return res.status(HttpStatus.BAD_REQUEST).json('Gender is missing!')
  if (!skin) return res.status(HttpStatus.BAD_REQUEST).json('Skin is missing!')
  if (!csp) return res.status(HttpStatus.BAD_REQUEST).json('CSP is missing!')

  try {
    res.status(HttpStatus.CREATED).json(await getModel('character').create({
      name,
      gender,
      skin,
      csp
    }))
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getCharacter (res, payload) {
  try {
    const character = await getModel('character').findByPk(payload)
    if (!character) return res.status(HttpStatus.NOT_FOUND).json()
    res.json(character)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getCharactersList (res, options) {
  let opt = {}
  if (options.attributes) opt.attributes = options.attributes.split(';')

  try {
    const list = await getModel('character').findAll(opt)
    if (list.length === 0) return res.status(HttpStatus.NO_CONTENT).json()
    res.json(list)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function deleteCharacter (res, payload) {
  const model = getModel('character')
  try {
    const character = await model.findByPk(payload)
    if (!character) return res.status(HttpStatus.NOT_FOUND).json()
    await model.destroy({ where: { name: payload } })
    res.json(character)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
