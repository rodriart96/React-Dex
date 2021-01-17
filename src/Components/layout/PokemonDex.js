import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



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
color: black;
&:focus,
&:hover{
    color: #ef5350;
},
&:visited,
&:link,
&:active{
    text-decoration: none;
    }
`;
export default class PokemonDex extends Component {

    
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <h1 className='col-12 mb-5  d-flex justify-content-center'>National Dex</h1>
                            
                        
                        <div className='row mb-4'>
                                <Card 
                                  className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Kanto'><h2>Kanto</h2></StyledLink>
                                </Card>

                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Johto'><h2>Johto</h2></StyledLink>
                                </Card>
                        </div>

                        <div className='row mb-4'>
                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Hoenn'><h2>Hoenn</h2></StyledLink>
                                </Card>

                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Sinnoh'><h2>Sinnoh</h2></StyledLink>
                                </Card>
                        </div>

                        <div className='row mb-4'>
                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Unova'><h2>Unova</h2></StyledLink>
                                </Card>

                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Kalos'><h2>Kalos</h2></StyledLink>
                                </Card>
                        </div>

                        <div className='row mb-4 '>
                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Alola'><h2>Alola</h2></StyledLink>
                                </Card>

                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Galar'><h2>Galar</h2></StyledLink>
                                </Card>
                        </div>
                    </div> 
                </div> 
                    <hr/>
                    <div class="container mb-5">
                    <div class="row">
                        <h1 className='col-12 mb-3  d-flex justify-content-center'>Extras</h1>
                            
                        
                        <div className='row'>
                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Kanto'><h2>Abilities</h2></StyledLink>
                                </Card>

                                <Card className='col-sx-6 col-sm-4 mx-auto mt-3 d-flex justify-content-center'>
                                    <StyledLink to='/Johto'><h2>Berrys</h2></StyledLink>
                                </Card>
                        </div>

                       
                    </div> 
                </div> 
                    
            </div>   
        )
    }
}
