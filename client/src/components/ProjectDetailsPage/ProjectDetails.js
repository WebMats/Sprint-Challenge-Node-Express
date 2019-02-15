import React, { Component } from 'react'
import styled from 'styled-components';

const ProjectWrapper = styled.div`
    text-align: left;
    margin: 1rem;
`
const ProjectName = styled.h2`
    font-size: 2rem;
    text-decoration: underline;
`
const ProjectDescription = styled.p`
    font-size: 1.2rem;
`
const ProjectCompleted = styled.p`
    font-size: 1.2rem;
    color: green
`
const ProjectCompletedFalse = styled.p`
    font-size: 1.2rem;
    color: red;
`
const ProjectsButton = styled.button`
    margin-left: 6rem;
    height: 2rem;
    width: 9rem;
    border-radius: 5px;
    font-weight: 600;
    font-size: .8rem;
    cursor: pointer
    &:hover {
        transform: translateY(1px);
        transition-duration: .3s;
    }
`

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
              <React.Fragment>
                  <ProjectName>Name: {name}</ProjectName>
                  <ProjectDescription>Description: {description}</ProjectDescription>
                  {completed ? <ProjectCompleted>Completed Status: {completed.toString()}</ProjectCompleted> :<ProjectCompletedFalse>Completed Status: {completed.toString()}</ProjectCompletedFalse>}
                  <h2>Actions for this project</h2>
                  <ol>
                      {actions.map(({completed, description, id, notes}) => <li key={id}>
                        <h3>Description: {description}</h3>
                        <p>Notes: {notes}</p>
                        <p>Completed: {completed.toString()}</p>
                      </li>)}
                  </ol>
                  <ProjectsButton onClick={() => {this.props.history.push('/projects')}}>Navigate to Projects</ProjectsButton>
              </React.Fragment>
          )
      }
    return (
      <ProjectWrapper>
        {projectDetails}
      </ProjectWrapper>
    )
  }
}

export default ProjectDetails
