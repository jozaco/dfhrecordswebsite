import React from 'react';
import DisplayGrid from './DisplayGrid';
import { getArtistes } from './api/artists';


const getAllArtistes = () => {

    return getArtistes();


    /*let artistes = [
        {
            id: 'violeta_tello_grau',
            nom: 'Violeta Tello Grau',
        },
        {
            id: '1',
            nom: 'Motuo',
            link: 'https://soymotuo.bandcamp.com',
            imatge: 'assets/images/artistes/violeta_tello_grau/violeta_tello_grau.png'
        },
        {
            id: '2',
            nom: 'Moondown',
            link: 'https://moondown.bandcamp.com',
            imatge: 'assets/images/artistes/violeta_tello_grau/violeta_tello_grau.png'
        },
    ];
    */
    //artistes = [];
    /* 
        artistes.forEach((artista) => {
            artista.parent = 'artistes'
        });
     */
}

function Artistes(props) {

    return (
        <React.Fragment>
            <h1>Artistes</h1>
            <DisplayGrid content={getAllArtistes()} />
        </React.Fragment>
    );
}

export default Artistes;