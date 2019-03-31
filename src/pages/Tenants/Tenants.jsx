import * as React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="App">
                <p>This is <code>Tenants Segment</code>. Only users with <code>Landlord Role</code> can see this.</p>
            </div>
        );
    }
}

export default Dashboard;