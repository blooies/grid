import React, { Component } from 'react';
import classNames from 'classnames';
import './toast.less';

// message accepts a type to specify if it's an error or success message;
const Toast = ({ type, message }) => (
  <div className={classNames(
    'message-container',
    {'error': type === 'error'}
  )}>
    {message}
  </div>
)

export default Toast;
