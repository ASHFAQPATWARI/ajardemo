/* Storage helper to provide functionality related to storing and accessing things
   rom localstorage */

const storageHelper = {
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
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
    }
}

export default storageHelper;