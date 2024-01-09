/**
 * @jest-environment jsdom
 */

import { Product } from "../src/js/product-list/product"
import { ProductService } from "../src/js/product-list/product-service"
import { Main } from './../src/main'

/**
 * Mock localStorage for testing purpose without browser
 */
import { LocalStorage } from 'node-localstorage'
global.localStorage = new LocalStorage('./mock-data')

describe ('Product service', () => {
    let main

    beforeEach(() => {
        main = new Main()
    })
})