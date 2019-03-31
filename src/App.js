import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { ToastContainer } from 'react-toastify';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Signup from 'pages/Signup/Signup';
import auth from 'services/Auth';

import 'react-toastify/dist/ReactToastify.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <MainRoute path="/" component={Main} />
        </Switch>
        < ReactTooltip effect='solid' / >
        <ToastContainer />
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
              pathname: '/signup',
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default App;
