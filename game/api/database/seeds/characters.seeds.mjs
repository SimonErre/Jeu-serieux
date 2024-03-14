import {getModel} from "#db/index.mjs";
import enums from "#utils/enums.mjs";

class Character {
  name
  skin
  csp
  gender

  static NAMES = [
      // 9 men: 3 black, 3 white, 3 chinese
      'Malik',
      'Jamal',
      'Kwame',
      'Loïc',
      'Elies',
      'Simon',
      'Lee',
      'Yang',
      'Jacky',
      // 9 women: 3 black, 3 white, 3 chinese
      'Aïssatou',
      'Nia',
      'Zahara',
      'Ashley',
      'Eléa',
      'Sophia',
      'Mei Ling',
      'Yumi',
      'Jiaying'
  ]

  constructor (name, gender, skin, csp) {
    this.name = name
    this.gender = gender
    this.skin = skin
    this.csp = csp
  }

  async create () {
    try {
        await getModel('character').create({
            name: this.name,
            gender: this.gender,
            skin: this.skin,
            csp: this.csp
        })
    } catch (e) {}
  }
}

const characters = buildCharacters();
function buildCharacters () {
  const res = []
  for (let gender of enums.genders)
    for (let skin of enums.skins)
      for (let csp of enums.csps)
        res.push(new Character(Character.NAMES[res.length], gender, skin, csp))
  return res
}

export default async function seed () {
  let count = 0

  console.log('')
  for (let c of characters) {
    console.log(`[Seeder] Creating character (${++count}/${characters.length})...`)
    await c.create()
  }
}
