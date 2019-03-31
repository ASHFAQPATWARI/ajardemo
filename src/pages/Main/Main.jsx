import * as React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import { ReactComponent as Logosm } from 'assets/imgs/logosm.svg';
import { ReactComponent as TenantIcon } from 'assets/icons/tenant.svg';
import { ReactComponent as PropertyIcon } from 'assets/icons/property.svg';
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';

import Header from 'shared-components/Header/Header';

import './Main.scss';

import Dashboard from 'pages/Dashboard/Dashboard';
import Notifications from 'pages/Notifications/Notifications';
import Tenants from 'pages/Tenants/Tenants';
import Property from 'pages/Property/Property';
import NoMatch from 'pages/404Route/404Route';

const componentMapping = {
    dashboard: Dashboard,
    notifications: Notifications,
    tenants: Tenants,
    property: Property
}

const returnMenuIcon = function(slug) {
    switch(slug) {
        case 'dashboard': return <DashboardIcon className="sidelink-icon" />
        case 'tenants': return <TenantIcon className="sidelink-icon" />
        case 'property': return <PropertyIcon className="sidelink-icon" />
        case 'notifications': return <BellIcon className="sidelink-icon" />
        default: return false;
    }
}

class MainContainer extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className="main-container is-flex">
                <div className="main-sidebar">
                    <ul>
                        <li className='sidelink'>
                            <NavLink to="/" exact={true} activeClassName="active">
                                <Logosm className="sidelink-icon" />
                            </NavLink>
                        </li>
                        {
                            user.permissions.map((route) => {
                                return <li className='sidelink' key={route.slug} data-tip={route.title}>
                                    <NavLink to={`/${route.slug}`} activeClassName="active">
                                        {returnMenuIcon(route.slug)}
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='main-content'>
                    <Header></Header>
                    <section className='section'>
                        <Switch>
                            {
                                user.permissions.map((route) => {
                                    return <Route key={route.slug} path={`/${route.slug}`} component={componentMapping[route.slug]} />
                                })
                            }
                            <Redirect exact='true' from="/" to="/dashboard" />
                            <Route component={NoMatch} />
                        </Switch>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps)(MainContainer);