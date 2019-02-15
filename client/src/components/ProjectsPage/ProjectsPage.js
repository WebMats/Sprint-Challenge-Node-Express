import React, { Component } from 'react'


class ProjectsPage extends Component {
    state = {
        projects: []
    }
    componentDidMount() {
        this.fetchProjects()
    }
    fetchProjects = () => {
        fetch('http://localhost:8000/project', {method:"GET"}).then(async (result) => {
            const projects = await result.json();
            this.setState({projects})
        }).catch((err) => {
            console.error(err)
            throw err;
        });
    }
    navigateToProjectDetails(projectId) {
        this.props.history.push(`${this.props.match.path}/${projectId}`)
    }
  render() {
    return (
      <ul>
          {this.state.projects.map(proj => <li key={proj.id} onClick={this.navigateToProjectDetails.bind(this, proj.id)}>{proj.name}</li>)}
      </ul>
    )
  }
}

export default ProjectsPage
