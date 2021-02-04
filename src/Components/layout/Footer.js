import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='card-footer text-muted'>
                Data from {' '}       
                    <a href='https://pokeapi.co/' target='_blank' className='card-link'  without rel="noreferrer">   
                        PokeApi.co
                    </a>       
            </div>
        )
    }
}
