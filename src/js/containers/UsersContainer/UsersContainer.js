import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortBy, uniq } from 'underscore';
import SortFilter from '../../components/SortFilter/SortFilter';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import UsersGrid from '../../components/UsersGrid/UsersGrid';
import { loadUsers } from '../../actions/users';
import { setCategoryFilter } from '../../actions/filterType';
import { setSort } from '../../actions/sortType';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: '',
      currentCategory: ''
    }
  }

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  handleCategorySelect = (e) => {
    const value = e.target.value === 'all' ? '' : e.target.value;
    const { setCategoryFilter } = this.props;
    setCategoryFilter(value);
  }

  handleSortToggle = (e) => {
    const value = e.target.value === 'featured' ? '' : e.target.value;;
    const { setSort } = this.props;
    setSort(value);
  }

  sortUsers(users) {
    const { sortType } = this.props;
    switch (sortType) {
      case 'ascending':
        return sortBy(users, 'name');
        break;
      case 'descending':
        return sortBy(users, 'name').reverse();
        break;
      case 'priority':
        return sortBy(users, 'priority');
        break;
      default:
        return users;
    }
  }

  filterUsers(users) {
    const { filterType } = this.props;
    return users.filter(user => user.category === filterType);
  }

  getVisibleUsers() {
    const { users, filterType, sortType } = this.props;
    const sortedUsers = sortType ? this.sortUsers(users) : users;
    const filteredUsers = filterType ? this.filterUsers(sortedUsers) : sortedUsers;
    return filteredUsers;
  }

  render() {
    const { users, filterType } = this.props;
    const categories = uniq(users.map(user => user.category));
    const visibleUsers = this.getVisibleUsers();

    return (
      <div className='main-container'>
        <h2>Users Grid</h2>
        <div className='main-container__filter'>
          <SortFilter
            handleSortToggle={this.handleSortToggle}
          />
          <CategoryFilter
            currentCategory={filterType}
            categories={categories}
            handleCategorySelect={this.handleCategorySelect}
          />
        </div>
        <UsersGrid
          users={visibleUsers}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users, filterType, sortType } = state;

  return {
    users,
    filterType,
    sortType
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (users) => dispatch(loadUsers(users)),
    setCategoryFilter: (filterType) => dispatch(setCategoryFilter(filterType)),
    setSort: (sortType) => dispatch(setSort(sortType))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
