import React, { Component } from 'react'

class ProjectDetails extends Component {
    state = {
        project: {}
    }
    componentDidMount() {
        this.fetchProject(this.props.match.params.id);
    }
    fetchProject = (projectId) => {
        fetch(`http://localhost:8000/project/${projectId}`, {method: "GET"}).then( async (result) => {
            const project = await result.json();
            this.setState({project})
        }).catch((err) => {
            console.log(err)
            throw err;
        });
    }
  render() {
      let projectDetails = <p>Loading...</p>
      if (this.state.project.name !== undefined) {
          const {name, description, completed, actions} = this.state.project;
          projectDetails = (
              <div>
                  <h2>Name: {name}</h2>
                  <p>Description: {description}</p>
                  <p>Completed Status: {completed.toString()}</p>
                  <ul>
                      {actions.map(({completed, description, id, notes}) => <li key={id}>
                        <h2>Actions for this project</h2>
                        <h3>description: {description}</h3>
                        <p>notes: {notes}</p>
                        <p>completed: {completed.toString()}</p>
                      </li>)}
                  </ul>
                  <button onClick={() => {this.props.history.push('/projects')}}>Navigate to Projects</button>
              </div>
          )
      }
    return (
      <div>
        {projectDetails}
      </div>
    )
  }
}

export default ProjectDetails
