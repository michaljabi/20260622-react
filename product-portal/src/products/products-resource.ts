import type { Product } from './product'
import { httpClient } from "../shared/http-client";

const endpointURL = '/products'

export const productsResource = {
    async getAll(): Promise<Product[]> {
        // Ajax call docelowo - po wszystkie proukty
        return httpClient.get(endpointURL)
    },
    // inne metody
    async getOne(id: Product['id']): Promise<Product>  {
        return httpClient.get(`${endpointURL}/${id}`)
    },
    async addOne(product: Omit<Product, 'id'>): Promise<Product> {
        return httpClient.post(endpointURL, product)
    }
}