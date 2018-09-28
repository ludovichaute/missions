import React, { Component } from 'react';
import { Image,View, Text } from 'react-native';
import {Container,Content } from 'native-base';
import { missions }  from './dataApp';
import MissionItem from './MissionItem';
import base from '../firebase';


export default class ListMissions extends Component {

  constructor(props) {
    super(props);
    this.firestore = base.firestore();
    this.firestore.settings({
      timestampsInSnapshots: true
    });
    this.state = {
      missions: [],
      projects: [],
      skills: [],
      dataLoaded: false
    }
  }

  onCollectionUpdate = (querySnapshot, collection, loaded) => {
    let dataStore = {};
    querySnapshot.forEach((doc) => {
      dataStore[doc.id] = doc.data();
    });
    this.setState({
      [collection]: dataStore,
      dataLoaded:loaded
    });
  }

  async fetchAll() {
    await this.firestore.collection('missions').get().then(snapshot => this.onCollectionUpdate(snapshot, 'missions', false));
    await this.firestore.collection('projects').get().then(snapshot => this.onCollectionUpdate(snapshot, 'projects', false));
    await this.firestore.collection('skills').get().then(snapshot => this.onCollectionUpdate(snapshot, 'skills', true));
  }

  async componentWillMount() {
    await this.fetchAll();
  }

  render() {

    const listingMissions = Object.keys(this.state.missions).map(item => {
      if(this.state.dataLoaded) {
        return(
          <MissionItem
            key = {item}
            region ={this.state.missions[item].region}
            name={this.state.missions[item].name}
            description={this.state.missions[item].description}
            skills={this.state.missions[item].skills}
            hours={this.state.missions[item].hours}
          />
        );
      }
    });

    if(this.state.dataLoaded) {
      return (
        <Container>
          <Content>
            {listingMissions}
          </Content>
        </Container>
      );
    } else {
      return null;
    }


  }
}
