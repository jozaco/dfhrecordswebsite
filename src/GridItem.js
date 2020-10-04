import React from 'react';

function GridItem({ content }) {

    return (
        <div className="grid-item">
            <div className="grid-item-image">
                <img src={`assets/images/${content.parent}/${content.id}/${content.id}.png`} alt={content.nom} />
            </div>
            <div className="grid-item-name">
                {content.nom}
            </div>
        </div>
    )
}

export default GridItem;