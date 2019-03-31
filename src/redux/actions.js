import { SIGNED_UP, LOGGED_OUT } from "./actionTypes";

export const signedUp = user => ({
    type: SIGNED_UP,
    payload: {
        user: user
    }
});

export const loggedOut = () => ({
    type: LOGGED_OUT
});