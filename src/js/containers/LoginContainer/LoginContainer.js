import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import Toast from '../../components/Toast/Toast';
import { login, loginError } from '../../actions/login';

const ERROR_MESSAGES = {
  email: 'Please enter a valid email.',
  password: 'Please enter a password at least 10 characters long and contains at least 1 non alphanumeric character.',
  credentials: 'Denied.'
}

const FIELDS_TO_VALIDATE = [
  'email',
  'password'
]

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      messages: []
    }
  }

  // lists the different fields we want to validate and their rules;
  // regex: https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript;
  // but probably should also enforce validations on back-end;
  validate(obj) {
    let valid = false;
    let regex;

    switch (obj.type) {
      case 'email':
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        valid = regex.test(obj.content);
        break;
      case 'password':
        regex = /^(?=[\w!@#$%^&*()+]{10,})(?:.*[!@#$%^&*()+]+.*)$/;
        valid = regex.test(obj.content);
        break;
    }

    const message = ERROR_MESSAGES[obj.type];
    return {
      valid,
      message
    }
  }

  // this will check if fields are valid that are defined in `FIELDS_TO_VALIDATE`
  getValidationMessages(data) {
    return FIELDS_TO_VALIDATE.reduce((acc, field) => {
      // validate the fields using regex
      const validation = this.validate({
        type: field,
        content: data[field]
      })
      // if the field is not valid, display error message
      if (!validation.valid) {
        acc.push({
          message: validation.message,
          type: 'error'
        });
      }
      return acc;
    }, []);
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  componentWillReceiveProps(newProps) {
    const { loginError } = this.props;
    const { loginError: newLoginError } = newProps;
    if (loginError !== newLoginError && newLoginError) {
      this.addMessages([{
        message: ERROR_MESSAGES.credentials
      }])
    }
  }

  onFormSubmit = (e) => {
    const { email, password } = this.state;
    const { login, onLoginError } = this.props;
    e.preventDefault();

    // get the validations
    const messages = this.getValidationMessages({
      email,
      password
    })

    if (messages.length > 0) {
      onLoginError(false);
      this.addMessages(messages);
    // login if no client side error messages
    } else {
      login({
        email,
        password
      })
    }
  }

  addMessages(messages) {
    this.setState({
      messages
    })
  }

  renderMessages() {
    const { messages } = this.state;
    return messages.map((message, index) =>  (
      <Toast
        key={`message-${index}`}
        type={message.type ? message.type : 'error'}
        message={message.message}
      />
    ))
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        {this.renderMessages()}
       
        <LoginForm
          email={email}
          password={password}
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loginError } = state;
  return {
    loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    onLoginError: (bool) => dispatch(loginError(bool))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
