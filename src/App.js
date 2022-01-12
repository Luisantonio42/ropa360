import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch , Route } from 'react-router';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;