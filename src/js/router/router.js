import { HomeComponent } from "../../components/home/home.component"
import { StockComponent } from "../../components/stock/stock.component"
import { RouteBuilder } from "./route-builder"
export class Router {
    /**
     * Route collection
     * @var Route[]
     */
    #routes = []

    constructor() {
        this.#setDefault()
        this.#onLoad()
        this.#handleClick()
    }
    #onLoad() {
        window.addEventListener('DOMContentLoaded', () => {
            // Default route to Home
            const match = this.#routes.find((route) => route.path === '/' || route.path === '')
            if (match) {
                match.component.load()
            }
        })
    }
    #handleClick() {
        window.addEventListener('click', (event) => {
            const target = event.target.closest('a')
            
            if (!target) return

            const url = target.getAttribute('href')

            // If not external link
            if (target.hostname === location.hostname) {
                event.preventDefault()
                window.history.pushState(null, null, url)

                // Load expected component
                const match = this.#routes.find((route) => route.path === url)
                if (match) {
                    match.component.load()
                } else {
                    throw new Error('No route match :', url)
                }
            }
        }, false)
    }

    #setDefault() {
        const routeBuilder = new RouteBuilder()
        try {
            this.#routes.push(
            routeBuilder
                .path('/')
                .component(new HomeComponent())
                .title('Home')
                .build() 
            )
            this.#routes.push(
                routeBuilder
                .path('/stock')
                .component(new StockComponent())
                .title('My Stock')
                .build() 
            )        
        } catch(error) {
            console.log(error)
        }
    }
}