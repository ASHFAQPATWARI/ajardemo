import storageHelper from 'services/storage.js';

const Auth = {
    isAuthenticated: storageHelper.getUser() ? true : false,
    authenticate(cb) {
        this.isAuthenticated = true;
    }
};

export default Auth;