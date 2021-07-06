import { GET_PRODUCTS, ADD_PRODUCT, CLEAR_CART  } from "../actionTypes";

const initialState = {
    products: [],
    cart: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_PRODUCTS:
        return { ...state, products: payload }

    case ADD_PRODUCT:
        return { ...state, cart: [...state.cart, payload] }

    case CLEAR_CART:
        return { ...state, cart:[] }

    default:
        return state
    }
}
