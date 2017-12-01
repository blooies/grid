import React from 'react';
import UserCard from '../UserCard/UserCard';
import './users-grid.less';

const UsersGrid = ({ users }) => (
  <div className='user-grid'>
    {
      users.map((user, index) => (
        <UserCard
          key={`user-${user.name}-${index}`}
          name={user.name}
          age={user.age}
          priority={user.priority}
          category={user.category}
        />
      ))
    }
  </div>
)

export default UsersGrid;
