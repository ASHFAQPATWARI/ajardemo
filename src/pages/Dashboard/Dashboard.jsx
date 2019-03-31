import * as React from 'react';
import { connect } from "react-redux";

class Dashboard extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className="App">
                <h1 className='is-size-1'>Welcome {user.name}</h1>
                <p>This is Dashboard</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps)(Dashboard);