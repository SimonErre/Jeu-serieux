// Import the necessary modules
import store from '@/store'
import { Altercation, Reaction } from '@/assets/js/models/altercation.model'
import { Character, CharacterOptions } from '@/assets/js/models/character.model'
import { Session } from '@/assets/js/models/session.model'
import { randomString } from '@/assets/js/utils/strings.utils'

// Class GameController responsible for the game logic
export class GameController {
    // Criteria for the game
    static GENDERS = []
    static SKINS = []
    static CSPS = []
    // Mock lists for simulation
    static CHARACTERS = []
    static REACTIONS = []
    static STATISTICS = []
    // Game data
    characterOptions = new CharacterOptions('Homme', 'Caucasien', 'Streetwear')
    character = undefined
    altercation = undefined
    session = undefined

    // Function to store statistics in the game memory
    storeStatistics(statistics) {
        GameController.STATISTICS = [...statistics]
    }
    // Function to store characters in the game memory
    storeCharacters(characters) {
        GameController.CHARACTERS = [...characters]
    }
    // Function to store genders in the game memory
    storeGenders(genders) {
        GameController.GENDERS = [...genders]
    }
    // Function to store skins in the game memory
    storeSkins(skins) {
        GameController.SKINS = [...skins]
    }
    // Function to store CSPs in the game memory
    storeCsps(csps) {
        GameController.CSPS = [...csps]
    }
    // Function to store reactions in the game memory
    storeReactions(reactions) {
        GameController.REACTIONS = [...reactions]
    }
    // Function to store the session in the game memory
    storeSession(session) {
        this.storeCharacter(session.characterName)
        this.session = new Session(session.code, session.name, this.character)
    }
    // Function to store the character in the game memory
    storeCharacter(name) {
        this.character = new Character(name, this.characterOptions)
    }

    // Setter functions
    setAltercation(payload) {
        this.altercation = new Altercation(payload)
    }

    // Game methods
    static switchAltercation() {
        store.dispatch('nextAltercation')
    }
    static createSession(characterOptions) {
        store.dispatch('createSession', characterOptions.buildRequestOptions())
    }
    // Function for character reaction to an altercation
    react(reaction) {
        store.dispatch('react', {
            altercation: this.altercation.id,
            reaction: reaction.id,
            character: this.altercation.character.name
        })
    }
}

// Class Resume for storing game statistics and history
export class Resume {
    statistics
    history

    // Constructor of the class
    constructor(statistics, history) {
        this.statistics = statistics
        this.history = history
    }
}
