import React, { Component } from 'react';
import { Image,View } from 'react-native';
import {Container,Content } from 'native-base';
import { projects }  from './dataApp';
import ProjectItem from './ProjectItem';


export default class ListProject extends Component {
  render() {

    const listingProjects = Object.keys(this.props.projects).map(item => {
      return(
        <ProjectItem
        key = {item}
        region ={this.props.projects[item].region}
        name={this.props.projects[item].name}
        nombre = {this.props.projects[item].nombre}
        description={this.props.projects[item].description} 
        />
      );
    });

    return (
      <Container>
        <Content>
          {listingProjects}
        </Content>
      </Container>
    );
  }
}
