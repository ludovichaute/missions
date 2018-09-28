
import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon,Right, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ProjectItem extends Component {
  render() {
    return (
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://diverseeducation.com/wp-content/uploads/2013/06/060713_Paul_Ong.jpg'}} style={{height:40,width:40}} />
                <Body style={{flex:1}}>
                  <Text>{this.props.name}</Text>
                  <Text style={{fontStyle:'italic',color:'gray'}}>{this.props.region}</Text>
                </Body>
                <Body style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Button transparent onPress={()=>{Actions.listeMissions()}} small iconRight transparent>
                    <Text style={{color: '#4FBC84',fontSize:12}}>{this.props.nombre +' missions'}</Text>
                    <Icon name="arrow-dropright" style={{color: '#4FBC84'}} />
                  </Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{flex:1}}>
                <Text style={{marginBottom:15}}>Web Developpement</Text>
                <Text note>{this.props.description}</Text>
              </Body>
            </CardItem>
          </Card>

    );
  }
}
