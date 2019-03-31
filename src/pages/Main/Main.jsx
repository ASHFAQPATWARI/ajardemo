import * as React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import { ReactComponent as Logosm } from 'assets/imgs/logosm.svg';
import { ReactComponent as TenantIcon } from 'assets/icons/tenant.svg';
import { ReactComponent as PropertyIcon } from 'assets/icons/property.svg';
import { ReactComponent as GearIcon } from 'assets/icons/gear.svg';
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
                        <li className='sidelink'>
                            <NavLink to="/dashboard" activeClassName="active">
                                <DashboardIcon className="sidelink-icon" />
                            </NavLink>
                        </li>
                        {
                            this.props.user.role === 'landlord' ?
                                <>
                                    <li className='sidelink' data-tip="Tenants">
                                        <NavLink to="/tenants" activeClassName="active">
                                            <TenantIcon className="sidelink-icon" />
                                        </NavLink>
                                    </li>
                                    <li className='sidelink' data-tip="Properties">
                                        <NavLink to="/property" activeClassName="active">
                                            <PropertyIcon className="sidelink-icon" />
                                        </NavLink>
                                    </li>
                                    <li className='sidelink' data-tip="Settings">
                                        <NavLink to="/settings" activeClassName="active">
                                            <GearIcon className="sidelink-icon" />
                                        </NavLink>
                                    </li>
                                </> : ''
                        }
                        <li className='sidelink' data-tip="Notifications">
                            <NavLink to="/notifications" activeClassName="active">
                                <BellIcon className="sidelink-icon" />
                            </NavLink>
                        </li>
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
                            {/* <Route path="/dashboard" component={Dashboard} />
                            <Route path="/tenants" component={Tenants} />
                            <Route path="/property" component={Property} />
                            <Route path="/notifications" component={Notifications} /> */}
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
    console.log('user in main', user);
    return { user };
};

export default connect(mapStateToProps)(MainContainer);