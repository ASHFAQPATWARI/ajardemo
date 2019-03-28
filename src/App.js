import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import auth from './services/Auth';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />

          <MainRoute path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

const MainRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default App;
