import * as React from 'react';
import { connect } from "react-redux";

import TenantDashboard from './Tenant';
import LandlordDashboard from './Landlord';

const returnDashboard = function(role) {
    switch(role) {
        case 'landlord': {
            return <LandlordDashboard/>
        }
        case 'tenant': return <TenantDashboard />
        default: return <p>Something went wrong</p>
    }
}

class Dashboard extends React.Component {

    componentDidMount() {
        // fetch user related data here from server
    }

    render() {
        const { user } = this.props;
        return (
            <div className="dashboard">
                <h1 className='is-size-3'>Welcome {user.name}</h1>
                <br />
                {
                    returnDashboard(user.role)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps)(Dashboard);