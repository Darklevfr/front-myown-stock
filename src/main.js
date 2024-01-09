/**
 * Main
 *  Entry point of our app
 *  Load Router
 * @version 1.0.0
 *  - Instanciate a router
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 * @see Router
 */

import { ProductFixture } from "./js/product-list/product_fixture"
import { Router } from "./js/router/router"

/**
 * Class instance of Main
 */
let main

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
        
        // Load datas as application start
        new ProductFixture().loadFixture()
    }

}

(() => {
    main = new Main()
})()