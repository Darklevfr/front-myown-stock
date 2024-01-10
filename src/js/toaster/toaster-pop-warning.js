import { ToasterGeneral } from "./toaster-general"

export class ToasterPopWarning extends ToasterGeneral {

    constructor() {
        this.#buildToasterWarning()
    }

    // dismissToaster(duration = 0) {

    //     setTimeout(
    //         () => document.querySelector('.inner-box-toaster-warning').remove()
    //         , duration * 1000)
    // }

    // dismissToasterClick() {

    //     document.querySelector('.inner-box-toaster').remove()

    // }

    
    #buildToasterWarning() {
        
        const buildWarning = new ToasterGeneral()
        // ToasterGeneral.styleSheet()
        this.outBox = document.createElement('div')

        const textBox = document.createElement('p')
        this.outBox.appendChild(textBox)
        //Add img
        const leave = document.createElement('img')
        leave.src = '/assets/images/toaster/toaster.png'
        this.outBox.appendChild(leave)

        //4th: Add the button to agree
        this.agree = document.createElement('button')
        this.agree.setAttribute('type', 'button')
        this.outBox.appendChild(this.agree)

        // this.agree.addEventListener('click', this.dismissToasterClick)
        //Think to hook new to existing DOM element
        this.document.appendChild(this.outBox)
    }


    // #buildToasterWarning() {
        
    //     ToasterGeneral.styleSheet()
    //     //1st: Ceate a new DIV with the className : outer-div
    //     this.outBox = document.createElement('div')
    //     //2nd: Add the class to the freshly created Element
    //     this.outBox.classList.add('inner-box-toaster-warning')

    //     //3rd: Create the inner div
    //     const textBox = document.createElement('p')
    //     textBox.classList.add('text-box-toaster-warning')
    //     this.outBox.appendChild(textBox)
    //     //Add img
    //     const leave = document.createElement('img')
    //     leave.src = '/assets/images/toaster/toaster.png'
    //     leave.classList.add('img-toaster')
    //     this.outBox.appendChild(leave)

    //     //4th: Add the button to agree
    //     this.agree = document.createElement('button')
    //     this.agree.setAttribute('type', 'button')
    //     this.agree.classList.add('button-box-warning')
    //     this.outBox.appendChild(this.agree)

    //     this.agree.addEventListener('click', this.dismissToasterClick)
    //     //Think to hook new to existing DOM element
    //     this.#document.appendChild(this.outBox)
    // }
}