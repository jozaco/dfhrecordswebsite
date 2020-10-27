import React from 'react';
import DisplayGrid from './DisplayGrid';

import api from './api/artists';


const getAllArtistes = () => {

    api.documents('artistes').getAll().then((result) => {
        return result;
    });

    /*
    const artistes = getArtistes();
    console.log(artistes);
*/



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

class Artistes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artistes: getAllArtistes()
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Artistes</h1>
                <DisplayGrid content={this.state.artistes} />
            </React.Fragment>
        );
    }

}

export default Artistes;