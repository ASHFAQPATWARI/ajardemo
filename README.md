# AJAR ONLINE TEST EXERCISE

#### How to Run The bundled Application
- Unzip the ajaronline.zip, you should have folder name `ajaronline` now.
- Install the prerequisites, assuming `node.js` is installed
```sh
$ npm install -g serve
$ cd ajaronline
$ serve -s build
```

#### Run the application in development mode
```
$ cd ajaronline
$ npm install
$ npm start
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

#### The application is hosted using gitlab at: [AJAR ONLINE DEMO](https://ashfaqpatwari.gitlab.io/ajardemo/)

###### Note: Since gitlab does not support html5 routing, in order to refresh you will have to use the above url again else 404 page will be shown. Best way is to serve it from build folder as shown above.

