import { PictureLoader } from '../../js/loader/picture-loader'
import { ProductService } from '../../js/product-list/product-service'
import { Toaster } from '../../js/toaster/toaster'
import { ProductTile } from './product-tile'
import { FormObject } from '../../js/form/form'
import Hammer from 'hammerjs'
import { HttpClient } from '../../js/http/http-client'
/**
 * StockComponent
 * @version 1.0.0
 *  - Load product stock
 *  - Sort stock by alpha order
 *  - Display stock as simple tile list
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 */

import './product-tile.css'
export class StockComponent {

    #app = null

    /**
     * Component title
     * @var string
     */
    #title = 'My Stock'

    /**
     * Template to use to render
     * @var string
     */
    #template = ''

    /**
     * Product service
     * @var ProductService
     */
    #service = null

    /**
     * Products to display alphabetical sorted
     * @var Array<Product>
     */
    #products = []

    constructor() {
        this.#service = new ProductService()
        this.#app = document.querySelector('[app]')

    }


    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        this.#onInit() // Asynchronous mode
    }

    async #onInit() {
        const loader = new PictureLoader() // Overlay added

        this.#products = await this.#service.findAll()


        this.#products.sort((p1, p2) => p1.label.localeCompare(p2.label))
        
        this.#template += `<div class="product-list" role="list">`

        this.#template += `<button type="button" id="addProduct"> Add a product </button>`

        for (const product of this.#products) {
            const tile = new ProductTile()
            tile.setParameter('product', product)
            this.#template += tile.render()
        }
        this.#template += '</div>'
        this.#app.innerHTML = this.#template

        for (const product of this.#products) {
            const tile = document.querySelector(`#produt-tile${product.id} .product-tile-child`)
            console.log(tile)
            var hammer = new Hammer.Manager(tile);
            var swipe = new Hammer.Swipe();
            hammer.add(swipe);

            hammer.on('swipeleft', function(){
                tile.style.transform = "translateX(-100%)"
                setTimeout(function(){
                    new HttpClient().delete(`http://localhost:8080/products/${product.id}`)
                    document.querySelector(`#produt-tile${product.id}`).remove()
                }, 1000)
            });
            
        }
        const form = new FormObject()
        form.openModal()
        
        loader.dismiss(1)

        
        const toaster = new Toaster()
        toaster.message = 'Products was loaded !'
        toaster.show()

    }
}