import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortFilter from '../../components/SortFilter/SortFilter';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import UsersGrid from '../../components/UsersGrid/UsersGrid';
import { loadUsers } from '../../actions/users';
import getUnique from '../../utils/getUnique';
import './users-container.less';

// main app
class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: 'featured',
      currentCategory: ''
    }
  }

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  handleCategorySelect = (e) => {
    const currentCategory = e.target.value;
    this.setState({
      currentCategory
    });
  }

  handleSortToggle = (e) => {
    const currentSort = e.target.value;
    this.setState({
      currentSort
    })
  }

  render() {
    const { currentCategory, currentSort } = this.state;
    const { users } = this.props;
    const categories = getUnique(users.map(user => user.category));

    return (
      <div className='main-container'>
        <h2>Users Grid</h2>
        <div className='main-container__filter'>
          <SortFilter/>
          <CategoryFilter
            currentCategory={currentCategory}
            categories={categories}
            handleCategorySelect={this.handleCategorySelect}
          />
        </div>
        <UsersGrid
          users={users}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // const { users, sortType, filterType } = state;
  const { users } = state;

  return {
    users
    // sortType,
    // filterType
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (users) => dispatch(loadUsers(users))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
