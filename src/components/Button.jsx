import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
};

// без библиотеки classnames:
// <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>
//         {this.props.children}
// </button>

export default Button;
