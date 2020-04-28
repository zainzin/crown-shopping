import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types";

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