import * as React from 'react';

class Notifications extends React.Component {
    render() {
        return (
            <div className="notifications">
                <p>This is notifications. Tenant can view notifications here from Landlord or Property Management</p>
                <p className="has-text-danger is-size-3">This is not available to landlords</p>
            </div>
        );
    }
}

export default Notifications;