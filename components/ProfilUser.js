import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card,Container,Content, CardItem, Text,H1,Icon,Button,Picker,Item,Form,H2} from 'native-base';
export default class ProfilUser extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selected2: undefined,
  };
}
onValueChange2(value: string) {
  this.setState({
    selected2: value
  });

}
  render() {
    return (
      <Container>
      <Content>
          <Card style={{paddingTop:15,justifyContent:'center',alignSelf:'center'}}>
            <CardItem style={{flexDirection:'column'}}>
              <Image source={{uri: 'http://4.bp.blogspot.com/-CY9BB38dzss/VD25QaYDgmI/AAAAAAAAEqE/AhmiSvwndM0/s1600/Palp_trustme.jpg'}} style={{borderRadius:1000,width:200,height:200}} />
              <H1 style={{textAlign:'center',marginTop:15,color:'#4FBC84'}}>Sheev Palpatine</H1>
              <Text style={{textAlign:'center',marginTop:15}}>{"Did you ever hear the tragedy of Darth Plagueis The Wise ?"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="home" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"Le Sénat, Boulevard de Kashykk"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="map" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"Naboo"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="construct" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"It, Account"}</Text>
            </CardItem>
            <CardItem>
              <Button style={{backgroundColor:'#4FBC84', margin:'auto'}}>
                <Text>{"Edit profil"}</Text>
              </Button>
            </CardItem>

            {/*<Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Lightsaber" value="Lightsaber" />
                <Picker.Item label="Sith's power" value="Sith's power" />
                <Picker.Item label="Manipulation" value="Manipulation" />
                <Picker.Item label="Sith's mentoring" value="Sith's mentoring" />
              </Picker>
            </Item>*/}

          </Card>
          </Content>
          </Container>
    );
  }
}
