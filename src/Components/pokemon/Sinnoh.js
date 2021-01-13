import React, { Component } from 'react'
import PokemonCard from './PokemonCard.js'
import axios from 'axios';

export default class Sinnoh extends Component {

    state={
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=108&offset=386',
        pokemon: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
        console.log(res.data)
    };

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div className='row'>
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>loading</h1>
                )}
            </React.Fragment>
        )
    }
}
