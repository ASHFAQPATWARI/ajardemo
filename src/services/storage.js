/* Storage helper to provide functionality related to storing and accessing things
   from localstorage */

const storageHelper = {
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    },
    removeUser() {
        localStorage.removeItem('user');
    },
    // this function return user object from localstorage if it exists, else null
    getUser() {
        const userObject = localStorage.getItem('user');
        /* check if user object exists, before trying to parse
            if user exists, return user */
        if (userObject) {
            return JSON.parse(userObject);
        }
        // return null in case if user object does not exist in localstorage
        return null;
    },
    storeFormData(data) {
        localStorage.setItem('signupdata', JSON.stringify(data));
    },
    removeFormData() {
        localStorage.removeItem('signupdata');
    },
    // this function return signup form object from localstorage if it exists, else null
    getSignupData() {
        const signupdata = localStorage.getItem('signupdata');
        /* check if signup form object exists, before trying to parse
            if it exists, return it */
        if (signupdata) {
            return JSON.parse(signupdata);
        }
        // return null in case if bject does not exist in localstorage
        return null;
    },
}

export default storageHelper;