const Auth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true;
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 3000);
    },
    doLogin(email, password) {
        const data = {
            user: {
                email: email,
                password: password
            }
        }
        console.log('data for login', data);
    }
};

export default Auth;