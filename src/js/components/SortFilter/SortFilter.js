import React from 'react';
import './sort-filter.less';

const SortFilter = ({ currentSort, handleSortToggle }) => (
  <div className='sort-filter-container'>
    <label className='form-label'>Sort</label>
    <select
      className='form-select'
      value={currentSort}
      onChange={handleSortToggle}
    >
      <option value='featured'>Featured</option>
      <option value='ascending'>A-Z</option>
      <option value='descending'>Z-A</option>
      <option value='priority'>Priority</option>
    </select>
  </div>
)

export default SortFilter;
