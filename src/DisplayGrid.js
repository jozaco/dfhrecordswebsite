import React from 'react';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';
import api from './api/api';

class DisplayGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...props };
        this.getData = this.getData.bind(this);
    }

    getData(document) {
        api.documents(document).getAll().then((result) => {
            let data = [];
            result.forEach((doc) => {
                data.push(doc.data());
            })
            this.setState({ collectionData: data });
        });
    }

    componentDidMount() {
        this.getData(this.state.collection);
    }

    render() {

        return (
            <div className="grid-container">
                {this.state.collectionData && this.state.collectionData.length !== 0 ?

                    this.state.collectionData.map((item, i) =>
                        <Link to={`/${this.state.collection}/${item.id}`} key={i}>
                            <GridItem content={item} parent={this.state.collection} />
                        </Link>

                    )
                    : 'Molt aviat!'
                }
            </div>
        )
    }
}

export default DisplayGrid;