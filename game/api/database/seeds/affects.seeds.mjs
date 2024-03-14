import { getModel } from "#db/index.mjs";

const affects = [
  {
    reaction: 1,
    statistic: 1,
    amount: 1
  },
  {
    reaction: 1,
    statistic: 2,
    amount: -1
  },
  {
    reaction: 2,
    statistic: 1,
    amount: -1
  },
  {
    reaction: 3,
    statistic: 1,
    amount: 1
  },
  {
    reaction: 3,
    statistic: 2,
    amount: 1
  }
]

export default async function seed () {
  let count = 0

  console.log('')
  for (const a of affects) {
    try {
      console.log(`[Seeder] Creating affectation (${++count}/${affects.length})...`)
      await getModel('affect').create({
        reactionId: a.reaction,
        statisticId: a.statistic,
        amount: a.amount
      })
    } catch (e) {}
  }
}
