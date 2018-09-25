import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Drawer } from 'native-base';
import Sidebar from './components/Sidebar';
import FormTest from './components/FormTest';
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
      projects: []
    }
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
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header />
          <Content>
          <Button onPress={() => this.openDrawer()} title="Open" color="blue" />
            <Card>
              <CardItem>
                <Body>
                  <Text>
                     Your mother here
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <FormTest />
          </Content>
        </Container>
      </Drawer>
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
