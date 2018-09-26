import React, { Component } from 'react';
import { Image,View } from 'react-native';
import {Container,Content } from 'native-base';
import { missions }  from './dataApp';
import MissionItem from './MissionItem';


export default class ListMissions extends Component {
  render() {
    const listingMissions = missions.map( (mission) => {
      return (
        <MissionItem
        key = {mission.id}
        region ={mission.region}
        name={ mission.name}
        description={mission.description}
        skills={mission.skills}
        hours={mission.hours}

        />
      )
    })
    return (
          <View>

            {listingMissions}

          </View>

    );
  }
}
