import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Text,H1,Icon,Button} from 'native-base';
export default class ProfilMissions extends Component {
  render() {
    return (

          <Card style={{paddingTop:15,justifyContent:'center',alignSelf:'center'}}>
            <CardItem style={{flexDirection:'column'}}>
              <Image source={{uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/022/073/Did_you_ever_hear.jpg'}} style={{width:200,height:250}} />
              <H1 style={{textAlign:'center',marginTop:15,color:'#4FBC84'}}>The senat - Naboo</H1>
              <Text style={{textAlign:'center',marginTop:15}}>{"Did you ever hear the tragedy of Darth Plagueis The Wise ?"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="pie" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"Web Developpement"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="construct" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"IT, Account"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="calendar" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"5 hours"}</Text>
            </CardItem>
            <CardItem>
              <Text style={{color: 'black'}}>{"I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life"}</Text>
            </CardItem>
            <CardItem>
              <Button style={{backgroundColor:'#4FBC84', margin:'auto'}}>
                <Text>{"Apply to the mission"}</Text>
              </Button>
            </CardItem>
          </Card>

    );
  }
}
