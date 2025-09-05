export const PRICE_RANGE = {
    MIN: 0,
    MAX: 150
}

export const DEFAULT_THROTTLE_DELAY = 1000

export const SHIPPING_COST = 10.00

export const ROUTES = {
    'HOME': '/',
    'CHECKOUT': '/cart',
    'ORDER': '/order-completed'
}

export const SESSION_KEY = 'session-key'

export const cadFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD'
})