import React from 'react';

import './App.css';

import Header from './Components/Header';
import Home from './Home';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>

       <Header />

      <Switch>

      <Route path ='/search'>

        <SearchPage />

      </Route>

        <Route path ='/'>

          <Home />

        </Route>

      </Switch>

      <Footer />
             
      </Router>
      
    </div>
  );
}

export default App;
