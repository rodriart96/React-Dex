import React, { Component } from 'react'
import BerryCard from './BerryCard';
import axios from 'axios';

export default class BerryList extends Component {

    state={
        url: 'https://pokeapi.co/api/v2/berry/?limit=64',
        berry: null
    };

    async componentDidMount(){  
        const res = await axios.get(this.state.url);
        this.setState({ berry: res.data['results'] });
        console.log(res.data)
    };

    render() {
        return (
            <React.Fragment>
                {this.state.berry ? (
                    <div className='row'>
                        {this.state.berry.map(berry => (
                            <BerryCard
                                key={berry.name}
                                name={berry.name}
                                url={berry.url}
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
