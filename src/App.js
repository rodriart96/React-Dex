import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Components/layout/Navbar.js';
import Dashboard  from './Components/layout/Dashboard.js';
import Pokemon from './Components/pokemon/Pokemon';
import Johto from './Components/pokemon/Johto';
import Hoenn from './Components/pokemon/Hoenn';
import Sinnoh from './Components/pokemon/Sinnoh';
import Unova from './Components/pokemon/Unova';
import Kalos from './Components/pokemon/Kalos';
import Kanto from './Components/pokemon/Kanto';
import Alolah from './Components/pokemon/Alolah';
import Galar from './Components/pokemon/Galar';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Kanto}/>
              <Route exact path="/kanto" component={Kanto}/>
              <Route exact path="/pokemon/:dexNumber" component={Pokemon}/>
              <Route exact path="/johto/" component={Johto}/>
              <Route exact path="/hoenn/" component={Hoenn}/>
              <Route exact path="/sinnoh/" component={Sinnoh}/>
              <Route exact path="/unova/" component={Unova}/>
              <Route exact path="/kalos/" component={Kalos}/>
              <Route exact path="/alolah/" component={Alolah}/>
              <Route exact path="/galar" component={Galar}/>
            </Switch>
          </div>
        </div>
      </Router>
      
  );
}

export default App;
