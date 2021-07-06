import { GET_PRODUCTS, ADD_PRODUCT, CLEAR_CART  } from "../actionTypes";

export const getProducts = (payload) => ({
    type: GET_PRODUCTS,
    payload
})

export const addProducts = (payload) => ({
    type: ADD_PRODUCT,
    payload
})
export const clearCart = () => ({
    type: CLEAR_CART,
})