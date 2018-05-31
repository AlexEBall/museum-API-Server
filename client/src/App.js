import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    // const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));
    // pass in provider
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/agents" component={AgentsPage}/> */}
          </Switch>
        </Router>

    );
  }
}
