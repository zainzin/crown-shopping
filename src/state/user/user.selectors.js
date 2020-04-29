import { createSelector } from "reselect";

const userState = (state) => state.user;

export const userSelector = createSelector(
    [userState],
    (user) => user.currentUser
);