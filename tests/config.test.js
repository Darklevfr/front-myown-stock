import { Config } from "../src/js/config/config"

describe(`Config`, () => {
    it(`Should return a Map`, () => {
        const config = Config.PRODUCTS
        expect(config).toBeInstanceOf(Map)
    })
})