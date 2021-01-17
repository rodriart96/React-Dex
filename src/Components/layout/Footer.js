import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='card-footer text-muted'>
                Data from {' '}       
                    <a href='' target='_blank' className='card-link'>   
                        PokeApi.co
                    </a>       
            </div>
        )
    }
}
