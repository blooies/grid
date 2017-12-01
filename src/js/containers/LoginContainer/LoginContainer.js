import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const ERROR_MESSAGES = {
  email: 'Please enter a valid email.',
  password: 'Please enter a password at least 10 characters long and contains at least 1 non alphanumeric character.'
}

const FIELDS_TO_VALIDATE = [
  'email',
  'password'
]

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      messages: []
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>login</h2>
      </div>
    )
  }
}
