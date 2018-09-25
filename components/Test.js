import React from 'react';
import { View } from 'react-native';
import { Header, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Test extends React.Component {

  render() {
      return(
        <View>
          <Text>Test</Text>
          <Button onPress={() => Actions.retest()}>
          <Text>Retest</Text>
          </Button>
        </View>
      );
  }
}
