import React, { Component } from 'react';
import { Container, Text, Icon, Content, Button, Left, Body, Right, ListItem } from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class Sidemenu extends Component {
  render() {

    return (
      <Container style={{paddingTop:30}}>
        <Content>
          <ListItem icon>
            <Left>
                <Icon style={{color:'#848589'}} active={false} name="home" />
            </Left>
            <Body>
              <Button transparent>
                <Text style={{color: '#4FBC84'}}>Accueil</Text>
              </Button>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon style={{color:'#848589'}} active={false} name="person" />
            </Left>
            <Body>
            <Button transparent onPress={()=>{Actions.profil()}}>
              <Text style={{color: '#4FBC84'}}>Profile</Text>
              </Button>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Icon style={{color:'#848589'}} active={false} name="checkbox" />
            </Left>
            <Body>
              <Button transparent onPress={()=>{Actions.ListProject()}}>
                <Text style={{color: '#4FBC84'}}>Liste des projets</Text>
              </Button>
            </Body>
            <Right>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
