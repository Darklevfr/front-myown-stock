import '../form/form.css'

export class FormObject {
    #button = document.querySelector('#addProduct')

    #template = `
    <h1 class="titleForm"> Add a product : </h1>
    <form action="" method="POST" class="form">

    <label for="nameProduct" class="form__label">Name of product :</label>
    <input type="text" placeholder="Name of the product" class="form__input" id="nameProduct" />

    <label for="stockProduct" class="form__label">Stock of product :</label>
    <input type="number" placeholder="Number of product in stock" class="form__input" id="stockProduct" />
    
    <button type="button" id="addProductForm" disabled='true'> Submit </button>
    </form>`

    #nameProduct = null
    #number = null
    #validation = false


    openModal() {
        this.#button.addEventListener('click', () => {
            // 1st : Create a new DIV with className : form-box
            const outerBox = document.createElement('div')
            // 2nd : Add the class to the freshly form-box
            outerBox.classList.add('form-box')

            // 3rd : Create the inner div
            const innerBox = document.createElement('div')
            innerBox.classList.add('inner-form-box')
            innerBox.innerHTML = this.#template

            // 4th : Add the second box as child of first box
            outerBox.appendChild(innerBox)

            // Think to hook new element to existing DOM element
            document.querySelector('[app]').appendChild(outerBox)


            this.#nameProduct = document.querySelector('#nameProduct')
            this.#nameProduct.addEventListener('change', () => {
                this.verifyName()
            })
            this.#number = document.querySelector('#stockProduct')
            this.#number.addEventListener('input', () => {
                this.verifyStock()
            })
            this.#button = document.querySelector('#addProductForm')
            this.#button.addEventListener('change', () => {
                this.verifyButton()
            })

            // if (this.verifyStock() && this.verifyName() === true) {
            //     console.log('trueButton')
            //     this.#button.removeAttribute('disabled')

            // }
        })
    }

    verifyName() {

        if (this.#nameProduct === "") {
            throw new Error('Name was empty, please enter a real product')
        }

        console.log('trueName')
        return true
    }

    verifyStock() {

        this.#number = parseInt(this.#number.value)
        // console.log(typeof this.#number)

        if (this.#number < 0 || !(typeof this.#number === 'number')) {
            throw new Error('Cannot use this number, not enough or caractere is invalid.')
        }

        let lengthNb = this.#number

        if (lengthNb.length === 0 || lengthNb === '') {
            throw new Error('Cannot add this product, not enought in stock')
        }

        console.log('trueStock')
        return true
    }

}