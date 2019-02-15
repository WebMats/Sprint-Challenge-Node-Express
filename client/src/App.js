import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProjectsPage from './components/ProjectsPage/ProjectsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/projects" />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
