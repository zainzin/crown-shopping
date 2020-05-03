import { SET_CURRENT_USER, GET_USERS_FAILURE, GET_USERS_STARTED, GET_USERS_SUCCESS } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false,
    users: null,
    errors: undefined
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS_STARTED:
            return {
                ...state,
                isFetching: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetching: false
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}