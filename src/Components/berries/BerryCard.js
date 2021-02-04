import React, { Component } from 'react'
import styled from 'styled-components';
import Spinner from '../../img/source.gif';
import {Link} from 'react-router-dom';


const Sprite = styled.img`
width: 3em;
height: 3em;
`;

const Card = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(0.25, 0.8, .25, 1);
&:hover{
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0,0,0,0.22)
}
-moz-user-select:none;
-website-user-select:none;
user-select: none;
-o-user-select: none;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: #aaaaaa;
&:focus,
&:hover{
    color: black
},
&:visited,
&:link,
&:active{
    text-decoration: none;
    }
`;


export default class PokemonCard extends Component {
    
    state={
        name: '',
        img: '',
        id: '',
        imageLoading: true,
        toManyRequest: false
    }

    componentDidMount(){
        const {name,url} = this.props;
        const id = url.split("/")[url.split('/').length - 2];
        const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/items/berries/${name}-berry.png?raw=true`
        // path si logro poner todos los sprites  versions/generation-v/black-white/animated/


        this.setState({
            name, 
            img, 
            id
        })
    }

    render() {
        return (
            
            <div className='col-md-3 col-sm-6 col-xs-12 mb-5'>
                
                <StyledLink to={`berry/${this.state.id}`}>
                <Card className='card'>
                    <h5 className='card-header'> {this.state.id} </h5>
                    {this.state.imageLoading ? (
                        <img 
                        src={Spinner} 
                        style={{
                            width: '5em',
                            height: '5em'
                        }} 
                        className='card-img-top rounded mx-auto mt-2 spinner'
                        alt='loading'
                        />
                    ) : null
                }

                    <Sprite 
                    className='card-img-top rounded mx-auto mt-2' 
                    onLoad={()=> this.setState({imageLoading: false})}
                    onError={()=> this.setState({toManyRequest: true})}
                    src={this.state.img}
                    style={
                        this.state.toManyRequest ? {display: 'none'}
                        :
                        this.state.imageLoading ? null : {display : 'block'}
                    }
                    />
                    {this.state.toManyRequest ? (
                        <h6 className='mx-auto'>
                            <span className='badge badge-danger mt-8  '>To Many Request</span>
                        </h6>
                    ):null
                    
                    }
                    
                    <div className='card-body mx-auto'>

                        <h6 className= 'card-title nombre'>
                            {this.state.name
                            .toLowerCase()
                            .split(" ")
                            .map(
                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                            )
                            .join(' ')}
                        </h6>
                    </div>
                </Card>
                </StyledLink>
            </div>
        )
    }
}
