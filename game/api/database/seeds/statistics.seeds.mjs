import {getModel} from "#db/index.mjs";

const statistics = [
    'Aggressivité',
    'Peur'
]

export default async function seed () {
  let count = 0

  console.log('')
  for (let s of statistics) {
    console.log(`[Seeder] Creating statistic (${++count}/${statistics.length})...`)
    try {
      await getModel('statistic').create({
        label: s,
        defaultScore: 0
      })
    } catch (e) {}
  }
}
