import React,{Component} from 'react';
import { View } from 'react-native';
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
      if(this.state.username === 'romain') {
        this.setState({message:'OK !'});
        Actions.ListProject();
      }
      else this.setState({message:'Nope'});
    }



  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) =>this.setState({username:text})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button onPress={() => this.checkUsername()}>
              <Text>Sign in</Text>
            </Button>
          </Form>
          <Text>{this.state.message}</Text>
        </Content>
      </Container>
    );
  }
}
