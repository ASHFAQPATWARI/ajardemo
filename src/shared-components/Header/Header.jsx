import * as React from 'react';

import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';

import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar main-header" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="ajar logo" />
                    </a>
                </div>

                <div className="navbar-menu">
                    {/* <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div> */}

                    <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link is-arrowless">
                                <MoreIcon className="sidelink-icon"></MoreIcon>
                            </div>

                            <div className="navbar-dropdown is-right">
                                <div className="navbar-item cursor">
                                    <LogoutIcon className='logout'></LogoutIcon>
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;