import React from 'react';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';
import api from './api/api';

class DisplayGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...props };
        this.getData = this.getData.bind(this);

        console.log(this.state);
    }

    getData(document) {

        let data = [];

        api.documents('artistes').getAll().then((result) => {
            result.forEach((doc) => {

                data.push(doc.data());
            })
            console.log(data);

            return data;
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

    componentDidMount() {

        this.setState({ collectionData: this.getData(this.state.collection) });
        console.log(this.state);
        //console.log(collection);
    }


    render() {

        return (
            <div className="grid-container">
                {/* {this.state.props.collection.length !== 0 ?

                    this.state.props.collection.map((item, i) =>
                        <Link to={`/${item.parent}/${item.id}`} key={i}>
                            <GridItem content={item} />
                        </Link>

                    )
                    : 'Molt aviat!'
                } */}
                Molt aviat!
            </div>
        )
    }
}

export default DisplayGrid;