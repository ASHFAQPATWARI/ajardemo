import { SIGNED_UP, LOGGED_OUT } from "../actionTypes";
import storageHelper from 'services/storage';

const initialState = storageHelper.getUser();

const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGNED_UP: {
            return action.payload.user;
        }
        case LOGGED_OUT: {
            return null
        }
        default: {
            return state;
        }
    }
};

export default user;
