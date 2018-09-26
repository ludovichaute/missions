import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Text,H1,Icon,Button,Picker,Item,Form} from 'native-base';
export default class ProfilUser extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selected2: undefined
  };
}
onValueChange2(value: string) {
  this.setState({
    selected2: value
  });
}
  render() {
    return (

          <Card style={{paddingTop:15,justifyContent:'center',alignSelf:'center'}}>
            <CardItem style={{flexDirection:'column'}}>
              <Image source={{uri: 'http://4.bp.blogspot.com/-CY9BB38dzss/VD25QaYDgmI/AAAAAAAAEqE/AhmiSvwndM0/s1600/Palp_trustme.jpg'}} style={{borderRadius:1000,width:200,height:200}} />
              <H1 style={{textAlign:'center',marginTop:15,color:'#4FBC84'}}>Sheev Palpatine</H1>
              <Text style={{textAlign:'center',marginTop:15}}>{"Did you ever hear the tragedy of Darth Plagueis The Wise ?"}</Text>
            </CardItem>
            <CardItem>
              <Icon name="home" style={{color: '#4FBC84'}} />
              <Text style={{color: 'grey'}}>{"Boulevar de Kashykk -1300 Naboo "}</Text>
            </CardItem>
            <CardItem>
            <Item picker>
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
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>

            </CardItem>
          </Card>

    );
  }
}
