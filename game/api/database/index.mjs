import { Sequelize } from 'sequelize'
import registerModels from '#models/register.mjs'
import seedCharacters from '#db/seeds/characters.seeds.mjs'
import seedAltercations from '#db/seeds/altercations.seeds.mjs'
import seedReactions from '#db/seeds/reactions.seeds.mjs'
import seedStatistics from '#db/seeds/statistics.seeds.mjs'
import seedAffects from '#db/seeds/affects.seeds.mjs'

export function createORM () {
    const dialect = process.env.DB_DIALECT?.toLowerCase() || 'sqlite'

    switch (dialect) {
        case 'sqlite':
            return new Sequelize({
                dialect,
                storage: process.env.DB_FILE || 'database.db',
                logging: false
            })
        case 'mariadb': case 'mysql':
            return new Sequelize(process.env.DB_BASE_NAME, process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '3306'),
                dialect,
                logging: false
            })
        default:
            throw new Error(`Can't load a database without a correct dialect!`)
    }
}

let sequelize
try {
    sequelize = createORM()
} catch (e) {
    console.log(e.message)
}

export default async function initDatabase () {
    if (!sequelize) return console.log('> No database to load!')
    await registerModels(sequelize)

    try {
        await sequelize.sync({ force: process.env.NODE_ENV === 'development' })

        // SEEDS
        await seedCharacters()
        await seedAltercations()
        await seedReactions()
        await seedStatistics()
        await seedAffects()

        console.log('\n> Database synced!')
    } catch (e) {
        console.log(e)
    }
}

export function getModel(name) {
    if (!sequelize) throw new Error('Database not initialized, unable to recover a model!')
    if (!sequelize.models[name]) throw new Error(`Model '${name}' doesn't exist!`)
    return sequelize.models[name]
}
