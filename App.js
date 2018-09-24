import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchData from './test1';

export default class App extends React.Component {

  componentDidMount() {
    fetchData().then(data => console.log(data));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{"Let's do this !"}</Text>
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
