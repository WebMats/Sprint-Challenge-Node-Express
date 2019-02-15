import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ProjectDetails from './components/ProjectDetailsPage/ProjectDetails';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/projects" />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/projects/:id" component={ProjectDetails} />
          <Redirect to="/projects" />
        </Switch>
      </div>
    );
  }
}

export default App;
