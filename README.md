# AJAR ONLINE TEST EXERCISE

The exercise demonstrates REACT, REACT ROUTER and REDUX integration. There is a 2-step signup form which saves the incomplete form data on refresh or browser/window close. Based on the usertype selected, user needs to enter different data in step 2. On successfull signup, user is redirected to dashboard based on his role(TENANT or LANDLORD). There are different permissions for both user types and both will see different sidemenu links. USER is persisted in localstorage for demo purpose, thus, after successful signup, accessing dashboard will show the user dashboard based on role. Use logout button in Header to remove user.

#### Run the application in development mode (assuming node.js is installed)
```
$ git clone https://github.com/ASHFAQPATWARI/ajardemo.git
$ cd ajardemo
$ npm install
$ npm start
```

#### How to Build and serve the bundled Application

```sh
$ npm run build
$ npm install -g serve
$ serve -s build
```

### React concepts used are:
- Stateful class components
- Stateless functional components
- Component Lfecycle hooks for adding and removing listeners (`beforeunload` event for storing signup form data)
- React `state` and `props`
- DOM Events handling
- DOM Nodes `reference` (for validating signup form)
- JSX Patterns like `conditionals` & `lists`
- Returning multiple elements using `Fragments`
- Property validation using `PropTypes` (in Input component)

### React Router v4:
- Routes 
- Redirects (AUTHENTICATION)
- Handling No MATCH (404)
- Use of `SWITCH` for rendering only first matched route
- Using `withRouter` for components not rendered via React Router

### Redux Concepts displayed:
- `Reducers` for user handling
- Usage of `MapStateToProps` for getting user object from store
- Using `mapDispatchToProps` for setting user object in store on signup

#### The code is hosted on github: https://github.com/ASHFAQPATWARI/ajardemo

#### The application is hosted using gitlab at: [AJAR ONLINE DEMO](https://ashfaqpatwari.gitlab.io/ajardemo/)

###### Note: Since gitlab does not support html5 routing, in order to refresh you will have to use the above url again else 404 page will be shown. Best way is to serve it from build folder as shown above.

