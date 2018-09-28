import React from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Container, Content, Button, Title, Text, Card, CardItem, Body, Drawer, Left, Icon, Right, Spinner } from 'native-base';
import { Font } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Test from './components/Test';
import Retest from './components/Retest';
import LoginForm from './components/LoginForm';
import ListeMissions from './components/ListeMissions';
import ListMissions from './components/ListMissions';
import ListProject from './components/ListProject';
import ProfilMissions from './components/ProfilMissions';
// import fetchData from './test1';
// import Projects from './models/projects';
import base from './firebase';

export default class App extends React.Component {

  constructor() {
    super();
    this.firestore = base.firestore();
    this.firestore.settings({
      timestampsInSnapshots: true
    });
    // this.ref = this.firestore.collection('projects');
    this.unsubscribe = null;
    this.state = {
      projects: [],
      missions: [],
      fontsLoaded: false,
      dataLoaded:false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontsLoaded:true});
    await this.fetchAll();
  }

  componentDidMount() {
    // this.unsubscribe = this.firebase.collection('projects').onSnapshot(this.onCollectionUpdate, 'projects')
    // For one-time query use this line and comment the subscribe
    this.firestore.collection('projects').get().then(snapshot => this.onCollectionUpdate(snapshot, 'projects'));
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot, collection) => {
    let dataStore = [];
    querySnapshot.forEach((doc) => {
      dataStore.push({
        key: doc.id, // Document ID
        data: doc.data()
      });
    });
    this.setState({
      [collection]: dataStore,
      dataLoaded:true
    });
  }

  async fetchAll() {
    await this.firestore.collection('missions').get().then(snapshot => this.collectionUpdate(snapshot, 'missions', false));
    await this.firestore.collection('projects').get().then(snapshot => this.collectionUpdate(snapshot, 'projects', true));
  }

  collectionUpdate = (querySnapshot, collection, loaded) => {
    let dataStore = {};
    querySnapshot.forEach((doc) => {
      dataStore[doc.id] = doc.data();
    });
    this.setState({
      [collection]: dataStore,
      dataLoaded:loaded
    });
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    if(this.state.fontsLoaded && this.state.dataLoaded) {
      return (
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<Sidebar />}
          onClose={() => this.closeDrawer()} >
          <Container>
            <Header openDrawer={() => this.openDrawer()} />

            <Router>
              <Scene hideNavBar key="root" projects={this.state.projects} missions={this.state.missions} userid={"9e80Z5akXoTDHbXl7efL"}>
                <Scene hideNavBar key="listeProjets" component={ListProject} initial={true} />
                <Scene hideNavBar key="listeMissions" component={ListMissions} title="rePageTest" />
                <Scene hideNavBar key="detailMission" component={ProfilMissions} title="rePageTest" />
                <Scene hideNavBar key="profile" component={Retest} title="rePageTest" />
              </Scene>
            </Router>
          </Container>
        </Drawer>
      );
    }
    return (
      <View style={styles.container}>
        <Spinner color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
