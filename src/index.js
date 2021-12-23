import Login from './Login';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Registration from './Registration';
import LoginNewPage from './LoginNewPage';
import {render} from 'react-dom';

const App = () => (
  <div className='App'>
  <Router>
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route path="/Login" component={Login} />
      <Route path="/LoginNewPage" component={LoginNewPage} />
    </Switch>
  </Router>
  </div>
);

render(<App />, document.getElementById('root'));

