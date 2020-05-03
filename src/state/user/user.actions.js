import { SET_CURRENT_USER, GET_USERS_FAILURE, GET_USERS_STARTED, GET_USERS_SUCCESS } from "./user.types";

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const getUsersStarted = () => {
    return {
        type: GET_USERS_STARTED
    }
}

export const getUsersSuccess = (payload) => {
    console.log(payload);
    return {
        type: GET_USERS_SUCCESS,
        payload
    }
}

export const getUsersFailed = (payload) => {
    return {
        type: GET_USERS_FAILURE,
        payload
    }
}

export const getUsers = () => {
    return async dispatch => {
        dispatch(getUsersStarted());
        const res = await fetch('http://jsonplaceholder.typicode.com/users');
        const json = await res.json();
        if (res.status >= 400) {
            dispatch(getUsersFailed(json));
        } else {
            dispatch(getUsersSuccess(json));
        }
    }
}