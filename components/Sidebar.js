import React, { Component } from 'react';
import { Container, Text, Icon, Content, Button, Left, Body, Right, ListItem } from 'native-base';

export default class Sidemenu extends Component {
  render() {

    return (
      <Container>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Bonjour</Text>
            </Body>
            <Right>
              <Text>blop</Text>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
