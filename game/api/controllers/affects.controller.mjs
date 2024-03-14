import {HttpStatus} from "#structs/route.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";
import {getModel} from "#db/index.mjs";

export async function createAffect (res, payload) {
  const { reaction, statistic, amount } = payload
  if (!reaction) return res.status(HttpStatus.BAD_REQUEST).json('Reaction is missing!')
  if (!statistic) return res.status(HttpStatus.BAD_REQUEST).json('Statistic is missing!')

  try {
    if (!await getModel('reaction').findByPk(reaction)) return res.status(HttpStatus.NOT_FOUND).json('Reaction not found!')
    if (!await getModel('statistic').findByPk(statistic)) return res.status(HttpStatus.NOT_FOUND).json('Statistic not found!')
    res.status(HttpStatus.CREATED).json(await getModel('affect').create({
      reactionId: reaction,
      statisticId: statistic,
      amount
    }))
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getAffects (res, options) {
  try {
    const list = await getModel('affect').findAll(options)
    if (list.length === 0) return res.status(HttpStatus.NO_CONTENT).json()
    res.json(list)
  } catch (e) {
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
