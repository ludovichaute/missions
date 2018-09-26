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
                  <Text>{this.props.name}</Text>
                  <Text note>{this.props.region}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>

              <Text note>{this.props.description}</Text>

              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="construct" style={{color: 'black'}} />
                  <Text style={{color: 'black'}}>{this.props.skills}</Text>
              </Left>

              <Left>
                  <Icon name="calendar" style={{color: 'black'}} />
                  <Text style={{color: 'black'}}>{this.props.hours + " hours needed."}</Text>
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
