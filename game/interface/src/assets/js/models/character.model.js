// Import necessary modules and utilities
import { GameController } from "@/assets/js/controllers/game.controller";

// Class representing a Character in the game
export class Character {
    name   // Name or label of the character
    specs  // Specifications or options associated with the character

    // Constructor to initialize a Character instance
    constructor(name, specs) {
        const { gender, skin, csp } = specs

        this.name  = name
        this.specs = new CharacterOptions(gender, skin, csp)
    }
}

// Class representing options for a Character
export class CharacterOptions {
    gender  // Gender option for the character
    skin    // Skin option for the character
    csp     // CSP (Character-Specific Power) option for the character

    // Constructor to initialize a CharacterOptions instance
    constructor(gender, skin, csp) {
        this.gender = gender
        this.skin   = skin
        this.csp    = csp
    }

    // Function to set the gender option
    selectGender(gender) {
        this.gender = gender
    }

    // Function to set the skin option based on GameController.SKINS
    selectSkin(skin) {
        this.skin = GameController.SKINS[skin]
    }

    // Function to set the CSP option
    selectCsp(csp) {
        this.csp = csp
    }

    // Function to cycle to the next gender option
    nextGender(direction) {
        const { GENDERS } = GameController
        const index = GENDERS.indexOf(this.gender)
        const next = index + direction
        this.selectGender(GENDERS[next >= GENDERS.length ? 0 : (next < 0 ? GENDERS.length - 1 : next)])
    }

    // Function to cycle to the next CSP option
    nextCsp(direction) {
        const { CSPS } = GameController
        const index = CSPS.indexOf(this.csp)
        const next = index + direction
        this.selectCsp(CSPS[next >= CSPS.length ? 0 : (next < 0 ? CSPS.length - 1 : next)])
    }

    // Function to build request options for the character
    buildRequestOptions() {
        return {
            gender: this.gender,
            skin: this.skin,
            csp: this.csp
        }
    }

    // Function to build the image URI for the character
    buildImageURI(direction) {
        return `${this.skin}${this.gender}${this.csp}${direction}.png`
    }
}
