import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: 'featured',
      currentCategory: ''
    }
  }

  render() {
    const { currentCategory, currentSort } = this.state;
    const { users } = this.props;

    return (
      <div className='main-container'>
        <h2>Users Grid</h2>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { users } = state;

  return {
    users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (users) => dispatch(loadUsers(users))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
