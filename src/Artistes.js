import React from 'react';
import DisplayGrid from './DisplayGrid';
import api from './api/api';

class Artistes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...props };

        this.getData = this.getData.bind(this);
    }

    getData = () => {
        const artistes = [];

        api.documents(api.artistes).getAll().then((result) => {
            result.forEach((doc) => {
                artistes.push(doc.data());
            })
            console.log(artistes);
            this.setState({ collectionData: artistes });
        })
    }

    componentDidMount() {
        this.setState({ collection: api.artistes });
        this.getData();
    }

    render() {
        return (
            <React.Fragment>
                <h1>Artistes</h1>
                {this.state.collectionData ?

                    <DisplayGrid collectionData={this.state.collectionData} collection={this.state.collection} />
                    : 'Molt aviat!'
                }
            </React.Fragment>
        );
    }

}

export default Artistes;