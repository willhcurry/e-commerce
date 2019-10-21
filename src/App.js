import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
