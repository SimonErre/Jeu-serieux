import {HttpStatus} from "#structs/route.mjs";
import {getModel} from "#db/index.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";

export async function createReaction (res, payload) {
  const { label, icon } = payload
  if (!label) return res.status(HttpStatus.BAD_REQUEST).json('Label is missing!')
  if (!icon) return res.status(HttpStatus.BAD_REQUEST).json('Icon is missing!')

  try {
    res.status(HttpStatus.CREATED).json(await getModel('reaction').create({
      label,
      icon
    }))
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getReaction (res, payload) {
  if (!payload) return res.status(HttpStatus.BAD_REQUEST).json()

  try {
    const reaction = await getModel('reaction').findByPk(payload)
    if (!reaction) return res.status(HttpStatus.NOT_FOUND).json()
    res.json(reaction)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json()
  }
}

export async function getReactionsList (res, options) {
  try {
    const list = await getModel('reaction').findAll(options)
    if (list.length === 0) return res.status(HttpStatus.NO_CONTENT).json()
    res.json(list)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json()
  }
}

export async function deleteReaction (res, payload) {
  if (!payload) return res.status(HttpStatus.BAD_REQUEST).json()
  const model = getModel('reaction')

  try {
    const reaction = await model.findByPk(payload)
    if (!reaction) return res.status(HttpStatus.NOT_FOUND).json()
    await model.destroy({ where: { id: payload } })
    res.json(reaction)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
