import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "./cart.types";

export const toggleCartMenu = () => {
    return {
        type: TOGGLE_CART_HIDDEN,
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item,
    }
}

export const clearItemFromCart = (id) => {
    return {
        type: CLEAR_ITEM_FROM_CART,
        payload: id
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}