import React from 'react';
import DisplayGrid from './DisplayGrid';
import LinksInline from './LinksInline';
import api from './api/api';
import { withRouter } from 'react-router';

class Artista extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...props };
        this.getArtista = this.getArtista.bind(this);
        this.getDiscografia = this.getDiscografia.bind(this);
    }

    componentDidMount() {
        this.getArtista();
    }

    getArtista = () => {
        api.documents(api.artistes).getItem(this.props.match.params.artistId).then((result) => {
            this.setState({ document: result.data() });
        });
    }

    getDiscografia = () => {
        return this.state.document.discografia;
    }

    render() {
        return (
            <div className="flex-row space-between">

                {this.state.document ?
                    <React.Fragment>
                        <div className="flex third flex-column align-start mlm">

                            <h1>{this.state.document.nom}</h1>
                            <p>{this.state.document.bio}</p>

                            {this.getDiscografia() ?
                                <React.Fragment>
                                    <h2>Discografia</h2>

                                    <DisplayGrid collectionData={this.getDiscografia()} collection={`${api.artistes}/${this.state.document.id}/discografia`} />
                                </React.Fragment>
                                : ''
                            }

                        </div>
                        <div className="flex flex-column align-start mlm mrm">
                            <h2>Enllaços pràctics</h2>
                            <LinksInline content={this.state.document.xarxes} title={this.state.document.nom} />
                        </div>
                        <div className="flex half overflow-hidden">
                            <img src={`/assets/images/artistes/${this.state.document.id}/foto_lateral.png`} alt={this.state.document.nom} />
                        </div>
                    </React.Fragment>
                    : 'no exists'
                }
            </div>

        )
    }

}

export default withRouter(Artista);