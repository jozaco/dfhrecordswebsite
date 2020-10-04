import React from 'react';


function LinksInline(props) {

    console.log(props);

    return (
        <ul className="inline unstyled">
            {props.content.map((linkItem, i) =>
                <li className="list-item" key={i}>
                    <a href={linkItem.link} title={`${props.title} ${linkItem.name}`} target="_blank" rel="noopener noreferrer">{linkItem.name}</a>
                </li>
            )}
        </ul>
    )

}

export default LinksInline;