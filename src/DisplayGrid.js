import React from 'react';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';

class DisplayGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {

        return (
            <div className="grid-container">
                {this.state.collectionData && this.state.collectionData.length !== 0 ?

                    this.state.collectionData.map((item, i) => {
                        console.log(item);
                        return (
                            <Link to={`/${this.state.collection}/${item.id}`} key={i}>
                                <GridItem content={item} parent={this.state.collection} />
                            </Link>)
                    }

                    )
                    : ''
                }
            </div>
        )
    }
}

export default DisplayGrid;