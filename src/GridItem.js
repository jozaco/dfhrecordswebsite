import React from 'react';

function GridItem({ content }) {

    return (
        <div className="grid-item">
            <div className="item-name">
                {content.nom}
            </div>
        </div>
    )
}

export default GridItem;