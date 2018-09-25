import React, { Component } from 'react';
import { Container, Text, Icon, Content, Button, Left, Body, Right, ListItem } from 'native-base';

export default class Sidemenu extends Component {
  render() {

    return (
      <Container style={{paddingTop:30}}>
        <Content>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="home" />
              </Button>
            </Left>
            <Body>
              <Text>Accueil</Text>
            </Body>
            <Right>
              <Text>blop</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="person" />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="settings" />
              </Button>
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active={false} name="hammer" />
              </Button>
            </Left>
            <Body>
              <Text>Marteau</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
