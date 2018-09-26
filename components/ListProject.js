import React, { Component } from 'react';
import { Image,View } from 'react-native';
import {Container,Content } from 'native-base';
import { projects }  from './dataApp';
import ProjectItem from './ProjectItem';


export default class ListProject extends Component {
  render() {
    const listingProjects = projects.map( (project) => {
      return (
        <ProjectItem
        key = {project.id}
        region ={project.region}
        name={ project.name}
        nombre = {project.nombre}
        description={project.description}
        />
      )
    })
    return (
      <Container>
        <Content>
            {listingProjects}

          </Content>
        </Container>
    );
  }
}
