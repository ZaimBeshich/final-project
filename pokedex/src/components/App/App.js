import React, { useEffect } from "react";
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from "../Main/MainContainer";
import Collection from "../Collection/CollectionContainer"
import Navigation from "../Nav/Nav";
import PokemonPage from "../PokemonPage/PokemonContainer";
import { getPokemons } from "../../redux/actions";
import store from '../../redux/reducer';

const App = () => {
  useEffect(() => {
    store.dispatch(getPokemons(0));
  }, []);

  return (
    <Router>
      <div className='111'>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" exact render={
            () => <Main />
          } />

          <Route path="/collection" render={
            () => <Collection />
          } />

          <Route path="/PokemonPage/:name" render={
            () => <PokemonPage />
          } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;