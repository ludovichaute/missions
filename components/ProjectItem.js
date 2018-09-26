
import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon,Right, Left, Body } from 'native-base';
export default class ProjectItem extends Component {
  render() {
    return (
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://diverseeducation.com/wp-content/uploads/2013/06/060713_Paul_Ong.jpg'}} style={{height:40,width:40}} />
                <Body style={{flex:1}}>
                  <Text>Becode</Text>
                  <Text style={{fontStyle:'italic',color:'gray'}}>Bruxelles</Text>
                </Body>
                <Body style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:-100}}>
                  <Button small iconRight transparent>
                    <Text style={{color: '#4FBC84',fontSize:12}}>5 missions disponibles</Text>
                    <Icon name="arrow-dropright" style={{color: '#4FBC84'}} />
                  </Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{flex:1}}>
              <Text style={{marginBottom:15}}>Web Developpement</Text>
              <Text note>{"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you."}</Text>

              </Body>
            </CardItem>
          </Card>

    );
  }
}
