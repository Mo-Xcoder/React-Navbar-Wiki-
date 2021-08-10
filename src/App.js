import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BT from './pages/BT';
import PB from './pages/PB';
import SC from './pages/SC';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/PB' component={PB} />
          <Route path='/BT' component={BT} />
          <Route path='/SC' component={SC} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
