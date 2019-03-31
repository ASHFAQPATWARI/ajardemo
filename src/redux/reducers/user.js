import { SIGNED_UP, LOGGED_OUT } from "../actionTypes";
import { Tenant_Permissions, Landlord_Permissions } from "../constants";
import storageHelper from 'services/storage';

let initialState = null;
const getUserPermissions = (role) => {
    let permissions;
    switch (role) {
        case 'landlord': {
            permissions = Landlord_Permissions;
            break;
        }
        case 'tenant': {
            permissions = Tenant_Permissions;
            break;
        }
        default: {
            permissions = [];
        }
    }
    return permissions;
}

const userFromStorage = storageHelper.getUser();
if (userFromStorage) {
    const role = userFromStorage.role;
    initialState = { ...userFromStorage, permissions: getUserPermissions(role) };
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGNED_UP: {
            return { ...action.payload.user, permissions: getUserPermissions(action.payload.user.role) };
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
