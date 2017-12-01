import React from 'react';
import './user-card.less';

const UserCard = ({ name, age, priority, category }) => (
  <div className={`user-card user-card-priority-${priority}`}>
    <h2 className='user-card__name'>{name}</h2>
    <div className='user-card__age'>{age}</div>
    <div className='user-card__category'>{category}</div>
  </div>
)

export default UserCard;
