import React, { Component } from 'react';
import axios from 'axios';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D38357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
}

export default class Pokemon extends Component {

    state = {
        name: '',
        dexNumber: '',
        imgUrl: '',
        types: [],
        description: '',
        stats:{
            hp: '',
            attack:'',
            defense:'',
            speed:'',
            specialAttack:'',
            specialDefense:''
        },
        height:'',
        weight:'',
        eggGroups:'',
        abilities:'',
        genderRatioMale:'',
        genderRatioFemale:'',
        evs: '',
        hatchSteps:''
    };

    async componentDidMount() {
        const { dexNumber } = this.props.match.params;
    
    //urls
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${dexNumber}/`;
    const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${dexNumber}/`;
    const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/versions/generation-v/black-white/animated/${dexNumber}.gif?raw=true`

    //get info
    const pokemonRes = await axios.get(pokemonURL);
    

    const name = pokemonRes.data.name;
    const imgUrl = pokemonRes.data.sprites.front_default;

    this.setState({name})

    //get pokemon stats

    let {hp, attack, defense, speed, specialAttack, specialDefense} ='';

        pokemonRes.data.stats.map( stat => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];    
                    break;    
                case 'defense':    
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break; 
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;       
            }
        });

        const height = Math.round(pokemonRes.data.height * 10);
        const weight = Math.round(pokemonRes.data.weight / 10);

        const types = pokemonRes.data.types.map(type=> type.type.name);
        
        const abilities = pokemonRes.data.abilities.map( ability => {
            return ability.ability.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('  ');
        }).join(', ');
        
        const evs = pokemonRes.data.stats.filter(stat=> {
            if(stat.effort > 0) {
                return true;
            }
            return false;
            })
        .map( stat=> {
            return `${stat.effort} ${stat.stat.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ') 
            }`  
        })
        .join(',');


        await axios.get(pokemonSpecies).then(res => {
            let description = '';
            res.data.flavor_text_entries.some(flavor => {
                if(flavor.language.name === 'en') {
                    description = flavor.flavor_text;
                    return;
                }
            });

            const femaleRate = res.data['gender_rate']
            const genderRatioFemale = 12.5 * femaleRate;
            const genderRatioMale = 12.5 * (8 - femaleRate);

            const catchRate = Math.round((100/255) * res.data['capture_rate']);

            const eggGroups = res.data['egg_groups']
            .map(group => {
            return group.name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            })
            .join(', ');
        

        const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

        this.setState({
            description,
            genderRatioFemale,
            genderRatioMale,
            catchRate,
            hatchSteps,
            eggGroups
        });

        this.setState({
            name,
            dexNumber,
            imgUrl,
            types,
            stats:{
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense
            },
            height,
            weight,
            abilities,
            evs,
        })

    });
}

    //get Pokemon description

    render() {
        return (
            
            <div className='col'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-5'>
                                <h5>{this.state.dexNumber}</h5>
                            </div>
                            <div className='col-7'>
                                <div className='float-right'>
                                    {this.state.types.map( type => (
                                        <span key={type}
                                        className='badge badge-pill mr-1 '
                                        style={{
                                            backgroundColor: `#${TYPE_COLORS[type]}`, 
                                            color: 'white',
                                            padding: '0.3rem 1rem'
                                        }}
                                        >
                                            {type
                                            .toLowerCase()
                                            .split(' ')
                                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                            .join(' ')}
                                            </span>
                                        ))}     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className ='card-body'>
                        <div className = 'row align-items-center'>
                            <div className='col-md-3'>
                                <img src = {this.state.imgUrl}
                                    className='card-img-top rounded mx-auto mt-0'
                                    style={{
                                       
                                    }}
                                />
                                </div>   
                                <div className='col-md-9'>
                                    <h4 className='mx-auto'>
                                        {this.state.name
                                        .toLowerCase()
                                        .split(' ')
                                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                        .join(' ')}

                                    </h4>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>HP</div>
                                    <div className='col-12 col-md-9'>
                                       <div className='progress'>
                                           <div 
                                           className='progress-bar' role='progressBar' 
                                           style={{
                                               backgroundColor: '#FF5959',
                                               width: `${this.state.stats.hp}%`
                                           }}
                                           aria-valuenow="25"
                                           aria-valuemin="0"
                                           aria-valuemax="100"
                                           ><small>{this.state.stats.hp}</small>
                                            
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Attack</div>
                                    <div className='col-12 col-md-9'>
                                       <div className='progress'>
                                           <div 
                                           className='progress-bar' role='progressBar' 
                                           style={{
                                               backgroundColor: '#F5AC78',
                                               width: `${this.state.stats.attack}%`
                                           }}
                                           aria-valuenow="25"
                                           aria-valuemin="0"
                                           aria-valuemax="100"
                                           ><small>{this.state.stats.attack}</small>
                                            
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Defense</div>
                                    <div className='col-12 col-md-9'>
                                       <div className='progress'>
                                           <div 
                                           className='progress-bar' role='progressBar' 
                                           style={{
                                               backgroundColor:'#FAE078',
                                               width: `${this.state.stats.defense}%`
                                           }}
                                           aria-valuenow="25"
                                           aria-valuemin="0"
                                           aria-valuemax="100"
                                           ><small>{this.state.stats.defense}</small>
                                            
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Special Attack</div>
                                    <div className='col-12 col-md-9'>
                                       <div className='progress'>
                                           <div 
                                           className='progress-bar' role='progressBar' 
                                           style={{
                                               backgroundColor: '#9DB7F5',
                                               width: `${this.state.stats.specialAttack}%`
                                           }}
                                           aria-valuenow="25"
                                           aria-valuemin="0"
                                           aria-valuemax="100"
                                           ><small>{this.state.stats.specialAttack}</small>
                                            
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>Special Defense</div>
                                    <div className='col-12 col-md-9'>
                                       <div className='progress'>
                                           <div 
                                           className='progress-bar' role='progressBar' 
                                           style={{
                                               backgroundColor:'#A7DB8D',
                                               width: `${this.state.stats.specialDefense}%`
                                           }}
                                           aria-valuenow="25"
                                           aria-valuemin="0"
                                           aria-valuemax="100"
                                           ><small>{this.state.stats.specialDefense}</small>
                                            
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div className='row align-items-center mb-3'>
                                    <div className='col-12 col-md-3'>Speed</div>
                                    <div className='col-12 col-md-9'>
                                       <div className='progress'>
                                           <div 
                                           className='progress-bar' role='progressBar' 
                                           style={{
                                               backgroundColor:'#FA92B2',
                                               width: `${this.state.stats.speed}%`
                                           }}
                                           aria-valuenow="25"
                                           aria-valuemin="0"
                                           aria-valuemax="100"
                                           ><small>{this.state.stats.speed}</small>
                                            
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <hr/>
                                <span><b>Description</b></span>
                                <div className='row'>
                                    <div className='col'> <p>{this.state.description}</p></div>
                                </div>
                                <hr/>
                                
                            </div>
                            <div className='card-body'>
                                    <h5 className='card-title text-center'>Profile</h5>
                                    
                                    <div className='row'>
                                        <div className='col-md-6  '>
                                                <hr/>
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>Height:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.height} CM</h6>
                                                    </div>
                                            </div>
                                                <hr/>
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>Weight:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.weight} KG</h6>
                                                    </div>
                                            </div>
                                                <hr/>
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>Catch Rate:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.catchRate} %</h6>
                                                    </div>
                                            </div>
                                                <hr/>
                                            <div className='row mb-3 col-md-12'>
                                            <div className=''>
                                                <h6 className='float-right'>Gender Ratio:</h6>
                                                </div>
                                                    <div className='col-md-6'>
                                                        <div className='progress'>
                                                            <div 
                                                            className='progress-bar' 
                                                            role='progressBar' 
                                                            style={{
                                                                backgroundColor: '#C2185B',
                                                                width: `${this.state.genderRatioFemale}%`
                                                            }}
                                                            aria-valuenow="15"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            >
                                                                <small>{this.state.genderRatioFemale}</small>
                                                            </div>

                                                            <div 
                                                            className='progress-bar' 
                                                            role='progressBar' 
                                                            style={{
                                                                backgroundColor: '#19746D2',
                                                                width: `${this.state.genderRatioMale}%`
                                                            }}
                                                            aria-valuenow="30"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            >
                                                                <small>{this.state.genderRatioMale}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <hr/>               
                                        </div>
                                        <div className='col-md-6  '>
                                            <hr/>
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>Egg Groups:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.eggGroups}</h6>
                                                    </div>
                                            </div>
                                            <hr/>   
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>Hatch Steps:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.hatchSteps}</h6>
                                                    </div>
                                            </div>
                                            <hr/>
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>Abilities:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.abilities}</h6>
                                                    </div>
                                            </div>
                                            <hr/>
                                            <div className='row mb-3 col-md-12'>
                                                <div className=''>
                                                    <h6 className='float-right'>EVS:</h6>
                                                </div>
                                            
                                                    <div className='col-md-6'>
                                                        <h6 className='float-left'>{this.state.evs}</h6>
                                                    </div>
                                            </div>
                                            <hr/>
                                          </div>                     
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className='card-footer text-muted'>
                            Data from {' '}       
                            <a href='' target='_blank' className='card-link'>   
                                PokeApi.co
                            </a>       
                      </div>
                    </div>
                </div>
            
        )
    }
}


