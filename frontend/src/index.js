import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


