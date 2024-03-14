// Import necessary modules and utilities
import store from '@/store'
import { selectRandom } from '@/assets/js/utils/list.utils'
import { GameController } from '@/assets/js/controllers/game.controller'

// Class representing an Altercation in the game
export class Altercation {
    id          // Unique identifier for the altercation
    label       // Label or name of the altercation
    dojo        // Flag indicating whether the altercation takes place in a dojo
    character   // Character involved in the altercation
    background  // Background image for the altercation scene

    // List of possible background images
    static BACKGROUNDS = [
        'NightBackgroundMexicosAriba.png',
        'NightBackgroundNightClub.png'
    ]

    // Constructor to initialize an Altercation instance
    constructor(payload) {
        const { id, label, dojo, characterName } = payload

        this.id         = id
        this.label      = label
        this.dojo       = dojo
        // Find the character associated with the altercation by name
        this.character  = GameController.CHARACTERS.find(c => c.name === characterName)
        // Set the background based on whether it's a dojo altercation or randomize from backgrounds
        this.background = this.dojo ? 'DojoBackground.jpg' : selectRandom(Altercation.BACKGROUNDS)
    }

    // Function to handle the reaction to the altercation
    react(reaction) {
        store.dispatch('reactTo', {
            altercation: this.id,
            reaction: reaction.id
        })
    }
}

// Class representing a reaction in the game
export class Reaction {
    id          // Unique identifier for the reaction
    label       // Label or name of the reaction
    icon        // Icon associated with the reaction
    message     // Message or description of the reaction

    // Constructor to initialize a Reaction instance
    constructor(payload) {
        const { id, label, icon, message } = payload

        this.id      = id
        this.label   = label
        this.icon    = icon
        this.message = message
    }
}
