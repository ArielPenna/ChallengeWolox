import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Woloxers from './components/Woloxers';
import Beneficts from './components/Beneficts';
import Footer from './components/Footer';
import Register from './pages/Register';
import TechList from './pages/TechList';

import './css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/techList">
            <TechList />
          </Route>
          <Route path="/">
            <Navbar />
            <Welcome />
            <Woloxers />
            <Beneficts />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
