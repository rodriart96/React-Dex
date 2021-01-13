import React, { Component } from 'react'
import '../../App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a class="navbar-brand" href="#">React Dex</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <a class="nav-link disabled" href="#">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link disabled" href="#">Abilites</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link disabled" href="#">Berries</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                National Pokedex
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <ul>
                                            <li><Link to='/Kanto' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center '>Kanto </Link></li>
                                            <li><Link to='/johto' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Johto </Link></li>
                                            <li><Link to='/hoenn' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Hoenn </Link> </li>
                                            <li><Link to='/sinnoh' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Sinnoh </Link> </li>         
                                            <li><Link to='/unova' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Unova </Link></li>
                                            <li><Link to='/kalos' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Kalos </Link></li>
                                            <li><Link to='/alolah' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Alolah </Link></li>
                                            <li><Link to='/galar' className='navbar-brand col-sm-2 col-md-3 mr-0 align-items-center'>Galar </Link></li>
                                    </ul>         
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


