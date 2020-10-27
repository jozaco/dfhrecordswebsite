import React from 'react';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';

class DisplayGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props
        };
    }

    render() {
        return (
            <div className="grid-container">
                {this.state.props.content.length !== 0 ?

                    this.state.props.content.map((item, i) =>
                        <Link to={`/${item.parent}/${item.id}`} key={i}>
                            <GridItem content={item} />
                        </Link>

                    )
                    : 'Molt aviat!'
                }
            </div>
        )
    }
}

export default DisplayGrid;