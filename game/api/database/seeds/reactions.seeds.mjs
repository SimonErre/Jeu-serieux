import {getModel} from "#db/index.mjs";

const reactions = [
  {
    label: 'TitleButtonFight',
    icon: 'ButtonFight',
    message: 'Tu as voulu te battre, il va falloir en assumer les conséquences...'
  },
  {
    label: 'TitleButtonTalk',
    icon: 'ButtonTalk',
    message: `Enfin quelqu'un de raisonnable ! Ça se fait rare de nos jours ^_^`
  },
  {
    label: 'TitleButtonInsult',
    icon: 'ButtonInsult',
    message: `Insulter c'est une chose, mais le penser en est une autre ! À méditer...`
  }
]

export default async function seed () {
  let count = 0

  console.log('')
  for (let r of reactions) {
    console.log(`[Seeder] Creating reaction (${++count}/${reactions.length})...`)
    try {
      await getModel('reaction').create({
        label: r.label,
        icon: r.icon,
        message: r.message
      })
    } catch (e) {}
  }
}
