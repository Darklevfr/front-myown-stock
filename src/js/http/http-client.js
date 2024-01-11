export class HttpClient {
    async get(uri, observeResponse = false) {
        const response = fetch(
            uri
        )

        if (observeResponse) {
            return response
        }

        return response.then((body) => body.json())
    }

    async delete(uri, observeResponse = true) {
        const response = fetch(
            uri,
            {
                method: 'DELETE'
            }
        )
        if (observeResponse) {
            return response
        }
        return response.then((body) => body.json())
    }

    async add(product, uri = "http://localhost:8080/products", observeResponse = true) {
        const response = await fetch(uri, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:
            JSON.stringify({
                id: product.id,
                label: product.label,
                stock: product.stock
            }),
        })

        if (observeResponse) {
            return response
        }
        return response.then((body) => body.json())
    }
}