import React from 'react';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';

function DisplayGrid(props) {

    return (
        <div className="grid-container">
            {props.content.length !== 0 ?

                props.content.map((item, i) =>
                    <Link to={`/${item.parent}/${item.id}`} key={i}>
                        <GridItem content={item} />
                    </Link>

                )
                : 'Molt aviat!'
            }
        </div>
    )
}

export default DisplayGrid;