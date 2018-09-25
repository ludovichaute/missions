import React from 'react';
import { View } from 'react-native';
import { Header, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Retest extends React.Component {

  render() {
      return(
        <View>
          <Text>Retest</Text>
          <Button onPress={() => Actions.test()}>
          <Text>Test</Text>
          </Button>
        </View>
      );
  }
}
