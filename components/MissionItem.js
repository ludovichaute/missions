import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class MissionItem extends Component {
  render() {
    return (

          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://diverseeducation.com/wp-content/uploads/2013/06/060713_Paul_Ong.jpg'}} style={{height:40,width:40}} />
                <Body>
                  <Text>Becode</Text>
                  <Text note>April 15, 2016, Bruxelles</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>

              <Text note>{"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… "}</Text>

              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="construct" style={{color: 'black'}} />
                  <Text style={{color: 'black'}}>{"IT, Account"}</Text>
              </Left>

              <Left>
                  <Icon name="calendar" style={{color: 'black'}} />
                  <Text style={{color: 'black'}}>{"3 hours"}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="add-circle" style={{color: '#4FBC84'}} />
                  <Text style={{color: '#4FBC84'}}>{"Plus de détails"}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

    );
  }
}
