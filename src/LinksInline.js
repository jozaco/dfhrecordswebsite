import React from 'react';


function LinksInline(props) {

    console.log(props);

    return (
        <ul className="inline unstyled">
            {props.content.map((linkItem, i) =>
                <li className="list-item" key={i}>
                    <a href={linkItem.url} title={`${props.title} ${linkItem.nom}`} target="_blank" rel="noopener noreferrer">{linkItem.nom}</a>
                </li>
            )}
        </ul>
    )

}

export default LinksInline;