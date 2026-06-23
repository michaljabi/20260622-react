import data from '../../server/fake-data.json'
import type { Product } from './product'

// const endpointURL = 'http://localhost:3000/products'

export const productsResource = {
    getAll(): Product[] {
        // Ajax call docelowo - po wszystkie proukty
        return data.products
    },
    // getOne(id: Product['id']) {
        // ajax call docelowo po jeden produkt!
    //}
}