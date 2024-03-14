// Import necessary modules
import { setCookie } from '@/assets/js/utils/cookie.utils'

// Class representing a Session in the game
export class Session {
    code      // Code or identifier for the session
    name      // Name or label for the session
    character // Associated character for the session

    static KEY_NAME = 'session_code'  // Static key name for the session code

    // Constructor to initialize a Session instance
    constructor(code, name, character) {
        this.code      = code
        this.name      = name
        this.character = character
    }

    // Function to save the session code as a cookie
    saveCookieSession() {
        setCookie(Session.KEY_NAME, this.code, 72_000_000)
    }

    // Function to save the session code in local storage
    saveLocalStorageSession() {
        localStorage.setItem(Session.KEY_NAME, this.code)
    }

    // Function to save the session code based on persistence
    saveSessionCode(persistent = false) {
        if (persistent) this.saveLocalStorageSession()
        else this.saveCookieSession()
    }
}
