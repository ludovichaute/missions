import React,{Component} from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      message: null
    }
  }

    checkUsername() {
      if(this.state.username === 'dydy') {
        this.setState({message:'OK !'});
        Actions.ListProject();
      }
      else this.setState({message:'Nope'});
    }



  render() {
    return (
      <Container style={{justifyContent:"center",alignItems:'center',flex:1}}>
        <Content style={{flex:1}}>
        <Image source={require('../assets/logo.png')} style={{height:100,width:250,marginTop:25}} />
          <Form style={{alignItems:'center',justifyContent:'center'}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) =>this.setState({username:text})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button style={{backgroundColor: '#4FBC84',marginTop:35,width:250,justifyContent:'center'}} onPress={() => this.checkUsername()}>
              <Text>Login</Text>
            </Button>
          </Form>
          <Button transparent style={{alignSelf:'center',marginTop:15,justifyContent:'center'}}>
            <Text style={{fontSize:8, color: '#4FBC84'}}>{"If you don't have a profil yet, sign up here ."}</Text>
          </Button>
          <Text>{this.state.message}</Text>
        </Content>
      </Container>
    );
  }
}
