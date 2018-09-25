import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import SelectTest from './SelectTest';

export default class FormTest extends Component {
  render() {
    return (

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <SelectTest />
          </Form>

    );
  }
}
