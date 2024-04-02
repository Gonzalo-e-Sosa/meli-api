export interface Product {
    id: string
    title: string
    condition: string
    thumbnail_id: string
    catalog_product_id: string
    listing_type_id: string
    permalink: string
    buying_mode: string
    site_id: string
    category_id: string
    domain_id: string
    thumbnail: string
    currency_id: string
    order_backend: number
    price: number
    original_price: number
    sale_price: any
    available_quantity: number
    official_store_id: number
    use_thumbnail_id: boolean
    accepts_mercadopago: boolean
    shipping: Shipping
    stop_time: string
    seller: Seller
    attributes: any[]
    installments: Installments
    winner_item_id: any
    catalog_listing: boolean
    discounts: any
    promotions: any[]
    inventory_id: string
}

export interface Shipping { }

export interface Seller { }

export interface Installments { }
