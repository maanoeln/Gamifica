import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeroesContainer from '../containers/HeroesContainer';
import HeroesInfoContainer from '../containers/HeroesInfoContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HeroesContainer} />
    <Route exact path="/character/:id" component={HeroesInfoContainer} />
  </Switch>
);

export default Routes;
