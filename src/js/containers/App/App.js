import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './app.less';

// main app
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  renderRoute() {
    const loggedIn = localStorage.getItem('user:sessionToken');
    // if (loggedIn) {
    //   return <Redirect to='/users'/>;
    // }
    // return (
    //   <Redirect to ='/login'/>
    // );
  }

  render() {
    return (
      <div className='main-container'>
        <h2>main</h2>
      </div>
    );
  }
}
