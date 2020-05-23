import React from 'react';
import GridItem from './GridItem';

function DisplayGrid(props) {
    return (
        <div className="grid-container">
            {props.content.length !== 0 ?

                props.content.map((item, i) =>

                    <GridItem content={item} key={i} />

                )
                : 'Molt aviat!'
            }
        </div>
    )
}

export default DisplayGrid;