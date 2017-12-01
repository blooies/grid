import React from 'react';
import RadioInput from '../RadioInput/RadioInput';
import './category-filter.less';

const CategoryFilter = ({ currentCategory, categories, handleCategorySelect }) => (
  <div className='category-filter-container'>
    <label className='form-label'>Categories</label>
    <div className='form-radio'>
      <RadioInput
        value='reset'
        checked={currentCategory === 'reset'}
        onChange={handleCategorySelect}
      />
      {
        categories.map(category => (
          <RadioInput
            value={category}
            checked={currentCategory === category}
            onChange={handleCategorySelect}
          />
        ))
      }
    </div>
  </div>
)

export default CategoryFilter;
