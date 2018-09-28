import React, { Component } from 'react';
import { Container,Thumbnail, Text, Icon, Content, Button, Left, Body, Right, ListItem } from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class Sidemenu extends Component {
  render() {

    return (
      <Container style={{paddingTop:30}}>
        <Content style={{paddingLeft:0}}>
          <ListItem >
            <Thumbnail source={{uri: 'http://4.bp.blogspot.com/-CY9BB38dzss/VD25QaYDgmI/AAAAAAAAEqE/AhmiSvwndM0/s1600/Palp_trustme.jpg'}} style={{height:60,width:60}} />
            <Body>
              <Text style={{color:'#4FBC84',fontSize:18}}>{'Sheev Palpatine'}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={{color:'#848589'}} active={false} name="checkbox" />
            </Left>
            <Body>
              <Button transparent onPress={()=>{Actions.ListProject(); this.props.onClose()}}>
                <Text style={{color: '#4FBC84',width:250}}>Liste des projets</Text>
              </Button>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon style={{color:'#848589'}} active={false} name="checkmark-circle" />
            </Left>
            <Body>
              <Button transparent onPress={()=>{Actions.ListMissions(); this.props.onClose()}}>
                <Text style={{color: '#4FBC84',width:250}}>Liste des missions</Text>
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
              <Button transparent onPress={()=>{Actions.profil(); this.props.onClose()}}>
                <Text style={{color: '#4FBC84',width:250}}>My Profil</Text>
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
