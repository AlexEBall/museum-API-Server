import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import Programs from './pages/Programs';

export default class App extends Component {
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/exhibitions" component={Exhibitions}/>
            <Route exact path="/programs" component={Programs}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
