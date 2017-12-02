import React, { Component } from 'react';
import './login-form.less';

export default class LoginForm extends Component {
  render() {
    const {
      email,
      password,
      signin,
      onEmailChange,
      onPasswordChange,
      onFormSubmit
    } = this.props;

    return (
      <div className='login-container'>
        <h2 className='login-container__title'>Log In</h2>
        <form onSubmit={onFormSubmit}>
          <div className='form-group'>
            <label className='form-label' htmlFor='signup-email'>Email Address</label>
            <input
              className='form-input'
              id='signup-email'
              type='email'
              name='email'
              placeholder='hello@zola.com'
              value={email}
              onChange={onEmailChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='signup-password'>Password</label>
            <input
              className='form-input'
              id='signup-password'
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={onPasswordChange}
              required
            />
          </div>
          <div className='form-actions'>
            <button className='button' type='submit'>
              Log in
            </button>
          </div>
        </form>
      </div>
    )
  }
}
