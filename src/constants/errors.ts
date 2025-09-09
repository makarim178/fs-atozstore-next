export const CART_ERRORS = {
    'NOT_AVAILABLE': 'Cart is not available!',
    'TRY_AGAIN': 'Please try again later!',
    'ITEM_NOT_AVAILABLE': 'Item does not exist in cart!',
    'FAILED_CART': 'Failed to fetch cart!'
} as const

export const SESSION_ERROR = {
    'SESSION_ID_NOT_AVAILABLE': 'Session Id is required!',
    'FAILED_CART_SESSION': 'Failed to create cart session Id!'
}

export const ORDER_ERROR = {
    'NO_ORDER_ID': 'Order is required!',
    'FAILED_ORDER': 'Failed to fetch Order details!'
}