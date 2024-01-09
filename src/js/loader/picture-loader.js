export class PictureLoader {
    #document = document.querySelector('body')

    constructor() {
        this.#buildLayout()
    }

    dismiss(duration = 0) {
        setTimeout(
            () => document.querySelector('.outer-box').remove(),
            duration * 1000
        )
    }

    #buildLayout() {
        // Add styles
        const styleSheet = document.createElement('link')
        styleSheet.setAttribute('href', '/src/js/loader/loader.css')
        styleSheet.setAttribute('rel', 'stylesheet')
        document.querySelector('head').appendChild(styleSheet)

        // 1st : Create a new DIV with className : outer-div
        const outerBox = document.createElement('div')
        // 2nd : Add the class to the freshly createdElement
        outerBox.classList.add('outer-box')

        // 3rd : Create the inner div
        const innerBox = document.createElement('div')
        innerBox.classList.add('inner-box')

        // Add img
        const picture = document.createElement('img')
        picture.src = '/assets/images/loader/loader.webp'
        innerBox.appendChild(picture)

        // 4th : Add the second box as child of first box
        outerBox.appendChild(innerBox)

        // Think to hook new element to existing DOM element
        this.#document.appendChild(outerBox)
    }
}