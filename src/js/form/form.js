import '../form/form.css'

export class FormObject {
    #button = document.querySelector('#addProduct')

    #template = `
    <h1 class="titleForm"> Add a product : </h1>
    <form action="" method="POST" class="form">
    
    <label for="idProduct" class="form__label">ID Product</label>
    <input type="text" placeholder="Id of product" class="form__input" id="idProduct" />

    <label for="nameProduct" class="form__label">Name of product :</label>
    <input type="text" placeholder="Name of the product" class="form__input" id="nameProduct" />

    <label for="stockProduct" class="form__label">Stock of product :</label>
    <input type="number" placeholder="Number of product in stock" class="form__input" id="stockProduct" />
    
    <button type="submit" id="addProductForm" disabled='true'> Submit </button>
    </form>`
    #form = null
    #nameProduct = null
    #number = null
    #id = null

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


            this.#id = document.querySelector('#idProduct')
            this.#id.addEventListener('input', () => {
                this.checkButton()
            })

            this.#nameProduct = document.querySelector('#nameProduct')
            this.#nameProduct.addEventListener('input', () => {
                this.checkButton()
            })
            this.#number = document.querySelector('#stockProduct')
            this.#number.addEventListener('input', () => {
                this.checkButton()
            })
            this.#button = document.querySelector('#addProductForm')

            this.#form = document.querySelector('.form')
            this.#form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.#Submit()
            })
        })
    }

    verifyId() {
        // console.log(this.#nameProduct.value.length)

        if (this.#id.value.length === 0) {

            throw new Error('ID was empty, please enter a real product')

        }

        return true

    }

    verifyName() {
        // console.log(this.#nameProduct.value.length)
        if (this.#nameProduct.value.length === 0) {

            throw new Error('Name was empty, please enter a real product')
        }
        return true
    }

    verifyStock() {
        let stockNb = parseInt(this.#number.value)

        if (stockNb < 0 || isNaN(stockNb)) {
            throw new Error('Cannot use this number, not enough or caractere is invalid.')
        }

        if (stockNb.length === 0 || stockNb === '') {
            throw new Error('Cannot add this product, not enought in stock')
        }

        console.log('trueStock')

        return true

    }

    checkButton() {
        this.#button.setAttribute('disabled', 'true')

        if (this.verifyStock() && this.verifyName() && this.verifyId() === true) {
            this.#button.setAttribute('disabled', 'false')
        }
        this.#button.removeAttribute('disabled')
    }

    async #Submit() {
        console.log(JSON.stringify({
            id: this.#id.value,
            label: this.#nameProduct.value,
            stock: this.#number.value
        }))
        const send = await fetch("http://localhost:8080/products", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:
            {
                id: this.#id.value,
                label: this.#nameProduct.value,
                stock: this.#number.value
            },
        })
        .then(response => response.json())
    }

}