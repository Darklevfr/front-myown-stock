import { Route } from './route'

/**
 * RouteBuilder
 * @version 1.0.0
 *  - Chain path and component methods
 *  - throw exception if unable to build a Route object
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 * @date 2023-12-22
 */
export class RouteBuilder {
    #path = ''
    #component = null
    #title = ''

    path(path) {
        this.#path = path
        return this
    }

    component(component) {
        this.#component = component
        return this
    }

    title(title) {
        this.#title = title
        return this
    }

    build() {
        if (this.#component !== null && this.#title !== '') {
            const route = new Route()
            route.path = this.#path
            route.title = this.#title
            route.component = this.#component

            return route
        }

        throw new Error(`Unable to build route object : ${this.#path} ${this.#title}`)
    }
}