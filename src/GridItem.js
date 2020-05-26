import React from 'react';

function GridItem({ content }) {

    return (
        <div className="grid-item">
            <div className="grid-item-image">
                <img src={content.imatge} alt={content.nom} />
            </div>
            <div className="grid-item-name">
                {content.nom}
            </div>
        </div>
    )
}

export default GridItem;