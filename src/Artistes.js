import React from 'react';
import DisplayGrid from './DisplayGrid';


const getArtistes = () => {
    let artistes = [
        {
            id: '0',
            nom: 'Violeta Tello Grau',
            link: 'https://violeta.bandcamp.com'
        },
        {
            id: '1',
            nom: 'Motuo',
            link: 'https://soymotuo.bandcamp.com'
        },
        {
            id: '2',
            nom: 'Moondown',
            link: 'https://moondown.bandcamp.com'
        },
    ];
    //artistes = [];
    return artistes;
}

function Artistes(props) {
    return (
        <React.Fragment>
            <h1>Artistes</h1>
            <DisplayGrid content={getArtistes()} />
        </React.Fragment>
    );
}

export default Artistes;