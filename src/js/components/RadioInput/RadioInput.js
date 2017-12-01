import React from 'react';

const RadioInput = ({ checked, value, onChange }) => (
  <div>
    <label htmlFor={value}>{value}</label>
    <input
      type='radio'
      checked={checked}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default RadioInput;
