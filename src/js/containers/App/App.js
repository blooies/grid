import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// TODO: add index.js in containers folder to load containers from 1 common file;
import { UsersContainer } from '../UsersContainer/UsersContainer';
import { LoginContainer } from '../LoginContainer/LoginContainer';
import { checkAuth } from '../../actions/auth';
import './app.less';

// main app that carries the logic for rendering the different pages and handling redirects
class App extends Component {
  constructor(props) {
    super(props);

    // this route is only accessible if the user is not logged in;
    // can be expanded when more routes are added;
    this.loggedOutRoutes = ['/login'];
  }

  componentDidMount() {
    const { checkAuth } = this.props;
    checkAuth();
  }

  renderChildrenRoutes() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    )
  }

  renderLoginRequiredRoutes() {
    const { auth } = this.props;
    if (auth) {
      return this.renderChildrenRoutes();
    } else {
      return (
        <Redirect to='/login'/>
      )
    }
  }

  renderLoggedOutRequiredRoutes() {
    const { auth } = this.props;

    // if they are logged in, redirect them
    if (auth) {
      return (
        <Redirect to='/users'/>
      )
    } else {
      return this.renderChildrenRoutes();
    }
  }

  renderRoutes() {
    const { location } = this.props;
    const path = location.pathname;

    // user goes to a logged out route (/login)
    if (this.loggedOutRoutes.includes(path)) {
      return this.renderLoggedOutRequiredRoutes();
    }
   
    return this.renderLoginRequiredRoutes();
  }

  render() {
    return (
      <div className='main-container'>
        {this.renderRoutes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuth())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
