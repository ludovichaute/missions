import React from 'react';
import { View } from 'react-native';
import { Header, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import base from '../firebase';


export default class ListeMissions extends React.Component {

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
    console.log(this.state);
  }

  async fetchAll() {
    await this.firestore.collection('missions').get().then(snapshot => this.onCollectionUpdate(snapshot, 'missions', false));
    await this.firestore.collection('projects').get().then(snapshot => this.onCollectionUpdate(snapshot, 'projects', false));
    await this.firestore.collection('skills').get().then(snapshot => this.onCollectionUpdate(snapshot, 'skills', true));
  }

  async componentWillMount() {
    await this.fetchAll();
  }

  // listMissions() {
  //   this.props.missions.map(item => {
  //     return(
  //       <Text>{item.name}</Text>
  //     );
  //   });
  // }

  render() {

    // const missions = this.state.data.map((item) => {
    //   return(
    //     <View>
    //       <Text>{item.data.name}</Text>
    //       <Text>{item.data.missions === undefined ? 'undefined' : item.data.missions.map(item => {
    //         return(<Text>{item.name}</Text>)
    //       })}</Text>
    //     </View>
    //   );
    // });

    const missions = Object.keys(this.state.missions).map(item => {
      if(this.state.dataLoaded) {
        return(
          <View>
            <Text>{this.state.missions[item].name}</Text>
            <Text>{this.state.missions[item].project}</Text>
            <Text>{this.state.projects[this.state.missions[item].project].name}</Text>
          </View>
        );
      }
    });

      return(
        <View>
          <Text>Test</Text>
          <Button onPress={() => Actions.retest()}>
          <Text>Retest</Text>
          </Button>
          {this.state.dataLoaded ? missions : null}
        </View>
      );
  }
}
