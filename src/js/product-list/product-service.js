import { Config } from "../config/config"
import { HttpClient } from "../http/http-client"
import { ProductDeserializer } from "./product-deserializer"

export class ProductService {
    /**
     * Name of the localStorage key
     * @var string
     */
    #productKey = 'product'
    
    #httpClient = null

    constructor() {
        this.#httpClient = new HttpClient()
    }
    /**
     * Returns all products for the defined key
     * @returns array
     */
    async findAll() {
        const payload = await this.#httpClient.get(
            Config.API_ROUTES.get('all_product')
        )
        
        return ProductDeserializer.deserializeArray(payload)
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}