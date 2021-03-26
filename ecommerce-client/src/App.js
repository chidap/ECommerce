import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewArrivals from './pages/NewArrivals';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const App = () => {
  return (
      <Switch>
        <Route exact path = "/" component = { Home } />
        <Route exact path = "/newarrivals" component = { NewArrivals } />
        <Route exact path = "/login" component = { Login } />
        <Route exact path = "/register" component = { Register } />
      </Switch>
  );
};

export default App;
