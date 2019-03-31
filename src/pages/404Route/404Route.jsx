import * as React from 'react';

class NoMatch extends React.Component {
    render() {
        return (
            <h1>Either the link is not correct or you don't have the permissions.</h1>
        );
    }
}

export default NoMatch;