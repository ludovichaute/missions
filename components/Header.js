import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class MyHeader extends React.Component {

  render() {
      return(
        <Header style={{paddingTop:30, paddingBottom:10}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Missions</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      );
  }
}
