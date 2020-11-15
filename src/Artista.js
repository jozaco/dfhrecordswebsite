import React from 'react';
import DisplayGrid from './DisplayGrid';
import LinksInline from './LinksInline';

function Artista() {

    const getArtista = () => {
        let artista = {
            id: 'violeta_tello_grau',
            nom: 'Violeta Tello Grau',
            bio: 'Text per la bio',
            fitxa: 'link a fitxa',
            widget: 'link a widget',
            discografia: [
                {
                    id: 0,
                    nom: 'Musica Bruja'
                },
                {
                    id: 1,
                    nom: 'Nou disc'
                }
            ],
            xarxes: [
                {
                    name: 'facebook',
                    link: 'https://facebook.com',
                },
                {
                    name: 'instagram',
                    link: 'https://instagram.com',
                },
                {
                    name: 'bancamp',
                    link: 'https://bandcamp.com'
                }
            ],

        }

        return artista;
    }

    const getDiscografia = () => {
        return artista.discografia;
    }

    let artista = getArtista();

    return (

        <div className="flex-row space-between">
            <div className="flex third flex-column align-start mlm">
                <h1>{artista.nom}</h1>
                <p>{artista.bio}</p>

                <h2>Discografia</h2>
                <DisplayGrid content={getDiscografia()} />

            </div>
            <div className="flex flex-column align-start mlm mrm">
                <h2>Enllaços pràctics</h2>
                <LinksInline content={artista.xarxes} title={artista.nom} />
            </div>
            <div className="flex half overflow-hidden">
                <img src={`/assets/images/artistes/${artista.id}/foto_lateral.png`} alt={artista.nom} />
            </div>
        </div>

    )

}

export default Artista;