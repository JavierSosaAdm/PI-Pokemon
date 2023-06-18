import { React, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Home from './Vistas/Home/Home';
import Landing from './Vistas/Landing/Landing';
import Detail from './Vistas/Detail/Detail'
import Form  from './Vistas/Form/Form';
import Nav from './Componentes/Nav/Nav';
import Pokelist from './Componentes/Pokelist/Pokelist'
import './App.module.css';



function App() {
  const location = useLocation();
 
  const pokemon = useState([]);
  // const [landing, setLanding] = useState(true);


  return (
    <div>
      {location.pathname !== '/' && <Nav/>}
      <Route path = '/pokemons'>
        <Pokelist pokemon={pokemon}/>
      </Route>
      
      <Route exact path = '/'>
        <Landing/>
      </Route>

      <Route exact path = '/detail/:id' component={Detail}/>
      <Route exact path = '/create' component={Form}/>
      <Route exact path = '/home' render={() => (
        <div>
          <Home/>
        </div>
      )}/>
    </div>
  );
}

export default App;
