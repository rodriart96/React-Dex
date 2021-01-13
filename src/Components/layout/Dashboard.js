import React, { Component } from 'react'
import PokemonDex from '../pokemon/Kanto.js'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <PokemonDex/>
                </div>
            </div>
        )
    }
}
