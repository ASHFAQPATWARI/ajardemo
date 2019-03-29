import * as React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import { ReactComponent as Logosm } from 'assets/imgs/logosm.svg';
import { ReactComponent as TenantIcon } from 'assets/icons/tenant.svg';
import { ReactComponent as PropertyIcon } from 'assets/icons/property.svg';
import { ReactComponent as GearIcon } from 'assets/icons/gear.svg';
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';

import Header from 'shared-components/Header/Header';

import './Main.scss';

import Dashboard from 'pages/Dashboard/Dashboard';
import Tenants from 'pages/Tenants/Tenants';
import Property from 'pages/Property/Property';

class MainContainer extends React.Component {
    render() {
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
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/tenants" component={Tenants} />
                            <Route path="/property" component={Property} />
                            <Redirect exact='true' from="/" to="/dashboard" />
                        </Switch>
                    </section>
                </div>
            </div>
        );
    }
}

export default MainContainer;