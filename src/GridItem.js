import React from 'react';

function GridItem(props) {

    return (
        <div className="grid-item">
            <div className="grid-item-image">
                <img src={`./assets/images/${props.parent}/${props.content.id}/${props.content.id}.png`} alt={props.content.nom} />
            </div>
            <div className="grid-item-name">
                {props.content.nom}
            </div>
        </div>
    )
}

export default GridItem;