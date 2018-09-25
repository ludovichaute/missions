import React from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Container, Content, Button, Title, Text, Card, CardItem, Body, Drawer, Left, Icon, Right, Spinner } from 'native-base';
import { Font } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Test from './components/Test';
import Retest from './components/Retest';
// import fetchData from './test1';
// import Projects from './models/projects';
import base from './firebase';

export default class App extends React.Component {

  constructor() {
    super();
    let firestore = base.firestore();
    firestore.settings({
      timestampsInSnapshots: true
    });
    this.ref = firestore.collection('projects');
    this.unsubscribe = null;
    this.state = {
      projects: [],
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
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    // For one-time query use this line and comment the subscribe
    // this.ref.get().then(snapshot => this.onCollectionUpdate(snapshot));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    let projects = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      projects.push({
        key: doc.id, // Document ID
        name: data.name,
        desc: data.description
      });
    });
    this.setState({
      projects,
      dataLoaded:true
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
            <Scene hideNavBar key="root">
              <Scene hideNavBar key="test" component={Test} title="pageTest" initial={true} />
              <Scene hideNavBar key="retest" component={Retest} title="rePageTest" />
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
