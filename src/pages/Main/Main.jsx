import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from 'pages/Dashboard/Dashboard';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="main-container">
                <p>This is container</p>
                <div className='main-content'>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Redirect exact='true' from="/" to="/dashboard" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainContainer;