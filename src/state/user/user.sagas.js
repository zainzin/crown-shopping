import { takeEvery, call, put } from "redux-saga/effects";
import { GET_USERS_STARTED } from './user.types'
import { getUsersSuccess, getUsersFailed } from "./user.actions";


function* fetchUsersAsync() {
    const res = yield call(fetch, 'http://jsonplaceholder.typicode.com/users');
    const json = yield res.json();
    if (res.status >= 400) {
        yield put(getUsersFailed(json));
    } else {
        yield put(getUsersSuccess(json));
    }
}

export function* fetchUsersStart() {
    yield takeEvery(GET_USERS_STARTED, fetchUsersAsync);
}