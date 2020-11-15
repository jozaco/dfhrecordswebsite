import React from 'react';
import DisplayGrid from './DisplayGrid';

class Artistes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artistes: []
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Artistes</h1>
                <DisplayGrid collection={'artistes'} />
            </React.Fragment>
        );
    }

}

export default Artistes;