import { Action } from './action'
import { InvalidPositionError } from './errors/invalid-position.error'

/**
 * 
 */
export class Toaster {
    /**
     * @var {Map} Positions
     */
    #positions = new Map([
        ['top', {top: '1em'}],
        ['bottom', {bottom: '1em'}],
        ['middle', {top: '50%', translate: 'translateY(-50%)'}]
    ])

    /**
     * @var {string} Default position bottom
     */
    #position = this.#positions.get('bottom')

    /**
     * @var { Action | null} action and eventually callback
     */
    #action = null

    /**
     * @var { number } 
     */
    #duration = 3

    /**
     * @var { string } Default background color
     */
    #backgroundColor = 'hsl(200, 50%, 50%)'

    /**
     * @var { string } Message to show in toast
     */
    #message = ''

    /**
     * @var { Timeout }
     */
    #timeout = null

    set position(position) {
        if (this.#positions.has(position)) {
            this.#position = this.#positions.get(position)
        }

        throw new InvalidPositionError(`${position} is not a valid position : top, middle, bottom`)
    }

    get position() {
        return this.#position
    }

    set action(action) {
        if (!(action instanceof Action)) {
            throw new TypeError(`action must be of type Action`)
        }

        this.#action = action
    }

    get action() {
        return this.#action
    }

    set duration(duration) {
        if (duration < 1) {
            throw new RangeError(`${duration} is not in the range, must be >= 1`)
        }

        this.#duration = duration
    }

    get duration() {
        return this.#duration
    }

    set backgroundColor(backgroundColor) {
        this.#backgroundColor = backgroundColor
    }

    get backgroundColor() {
        return this.#backgroundColor
    }

    set message(message) {
        this.#message = message
    }

    get message() {
        return this.#message
    }

    show() {
        const toaster = this.#buildToast()
        document.querySelector('body').appendChild(toaster)
        this.#timeout = setTimeout(
            this.onDismiss(),
            this.#duration * 1000
        )
    }

    onDismiss() {
        clearTimeout(this.#timeout)
        document.querySelector('#widget-toaster').remove()
    }

    #buildToast() {
        const toastDiv = document.createElement('div')
        toastDiv.id = 'widget-toaster'
        toastDiv.style.height = '2em'
        toastDiv.style.width = '10em'
        toastDiv.style.maxWidth = '14em'
        toastDiv.style.position = 'absolute'
        toastDiv.style.backgroundColor = this.#backgroundColor
        // Loop on position to place toaster
        for (const style in this.#position) {
            toastDiv.style[style] = this.#position[style]
        }

        const toastMessage = document.createElement('div')
        toastMessage.innerText = this.#message
        toastDiv.appendChild(toastMessage)

        if (this.#action) {

        }

        return toastDiv
        
    }

}