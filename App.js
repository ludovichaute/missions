import React from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Title, Text, Card, CardItem, Body, Drawer, Left, Icon, Right, Spinner } from 'native-base';
import { Font } from 'expo';
import Sidebar from './components/Sidebar';
import FormTest from './components/FormTest';
import ProjectItem from './components/ProjectItem';
import MissionItem from './components/MissionItem';
import ProfilMissions from './components/ProfilMissions';
import ProfilUser from './components/ProfilUser';
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
      fontsLoaded: false
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
    // fetchData()
    // .then(data => console.log(data));
    // let projects = new Projects;
    // console.log(projects.all());
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)

    // this.ref.get().then(snapshot => {
    //   let projects = [];
    //   snapshot.forEach((doc) => {
    //     let data = doc.data();
    //     projects.push({
    //       key: doc.id, // Document ID
    //       name: data.name,
    //       desc: data.description
    //     });
    //   });
    //   this.setState({
    //     projects
    //  });
    // });

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
      projects
   });
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    if(this.state.fontsLoaded) {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header style={{paddingTop:30, paddingBottom:10, backgroundColor:'#4FBC84'}}>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Missions</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
          <Content>
          <MissionItem />
          <ProjectItem />
          {/*<ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />*/}
          <ProfilMissions />
          <ProfilUser />
          </Content>
        </Container>
      </Drawer>
    );
    }
    return (
        <View style={styles.container}>
          <Spinner color="#4FBC84" />
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
