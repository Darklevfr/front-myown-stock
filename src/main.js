/**
 * Main
 *  Entry point of our app
 *  Load Router
 * @version 1.0.0
 *  - Instanciate a router
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 * @see Router
 */

import { Router } from "./js/router/router.js"

/**
 * Class instance of Main
 */
let main

/**
 * Load CSS as needed
 */
import './css/main.css'
export class Main {
    #router = null

    constructor() {
        this.#run()
    }

    get router() {
        return this.#router
    }
    
    #run() {
        this.#router = new Router()
        
    }

}

(() => {
    main = new Main()
})()