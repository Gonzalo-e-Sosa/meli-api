import { API_BASE_URL, SELLER_ID, CATEGORY_ID } from "../../config";
import type { Product } from "../../types";

// search something in the api
const API_URL = new URL("search?", API_BASE_URL)

export const getProducts = (category?: string): Promise<Product[]> => {
    if (!API_URL) throw new Error("api url is not defined");
    API_URL.searchParams.append(SELLER_ID.name, SELLER_ID.exampleValue)

    if (category) API_URL.searchParams.append(CATEGORY_ID.name, category)

    return fetch(API_URL)
        .then(response => response.json() as Promise<{ results: Product[] }>)
        .then(data => data.results)
}