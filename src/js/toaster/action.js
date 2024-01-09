/**
 * 
 */
export class Action {
    /**
     * @var {string | null} Label for the action button
     */
    #label = null

    /**
     * @var {Function | null} Callback function to use after dismiss
     */
    #callback = null

    get label() {
        return this.#label
    }

    set label(label) {
        this.#label = label
    }

    get callback() {
        return this.#callback
    }

    set callback(callback) {
        this.#callback = callback
    }
}