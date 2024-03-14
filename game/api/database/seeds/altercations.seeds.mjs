import {getModel} from "#db/index.mjs";

const altercations = [
    `Oh ! Baisse les yeux, y'a pas à me regarder comme ça !`,
    `Viens là, j'te démarre quand tu veux !`,
    `Elle est où ta mère ? Tu vas avoir besoin de sa jupe pour essuyer tes larmes.`,
    `Plein le cul de ces noirs qui profitent du système !`,
    `Pourquoi instruire quand on peut juste taper ? (Taper, taper, taper.)`
]

export default async function seeds () {
  let count = 0

  console.log('')
  for (let a of altercations) {
    try {
      console.log(`[Seeder] Creating altercation (${++count}/${altercations.length})...`)
      await getModel('altercation').create({ label: a })
    } catch (e) {}
  }
}
