import { Product } from "./product"

export class ProductDeserializer {
    static deserializeArray(datas) {
        return datas.map((data) => {
            return ProductDeserializer.deserialize(data)
        })
    }

    static deserialize(data) {
        const product = new Product()
        product.id = data.id
        product.label = data.label
        product.stock = data.stock

        return product
    }
}