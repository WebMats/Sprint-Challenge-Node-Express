import React, { Component } from 'react'
import styled from 'styled-components';

const ProjectList = styled.ol`
    width: fit-content;
    padding: 0 10px;
    margin: 1rem auto 0 auto;
    li {
        list-style: decimal;
        cursor: pointer;
        font-size: 14px;
        margin: 1rem 0;
        text-align: left;
    }
`

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
    <React.Fragment>
        <h1>Click on project for more details</h1>
        <ProjectList>
            {this.state.projects.map(proj => <li key={proj.id} onClick={this.navigateToProjectDetails.bind(this, proj.id)}>{proj.name}</li>)}
        </ProjectList>
    </React.Fragment>
      
    )
  }
}

export default ProjectsPage
