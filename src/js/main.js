import { ProductFixture } from "./product-list/product_fixture";

let main;

class Main {
    constructor() {
    }

    loadFixture() {
        const loadFixture = new ProductFixture()
    }
}

(() => {
    main = new Main()

})()