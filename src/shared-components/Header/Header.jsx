import * as React from 'react';
import { withRouter } from 'react-router-dom';
import storageHelper from 'services/storage.js';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';

import './Header.scss';

class Header extends React.Component {

    logout = () => {
        storageHelper.removeUser();
        this.props.history.push('/signup');
    }

    render() {
        return (
            <nav className="navbar main-header" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item cursor" onClick={this.logout}>
                            <LogoutIcon className='logout'></LogoutIcon>
                            Logout
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

// using withRouter here because Header is not rendered via react router
export default withRouter(Header);