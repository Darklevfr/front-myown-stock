import { LocalStorageWrapper } from "../storage/local-storage-wrapper.js"
import product from './data-fixture.json'

export class ProductFixture {
    #productKey = 'product'

    loadFixture() {
        const storage = new LocalStorageWrapper()
        // Need to reset datas
        storage.removeKey(this.#productKey)
        storage.setData(this.#productKey, product)
    }
}