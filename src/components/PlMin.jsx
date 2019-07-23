import React from 'react';
import './buttons.css';

const isOperator = val => {
  return !isNaN(val) || val === ".";
}

const Button = props =>(
 <div
    className = {`button-wrapper ${
      isOperator(props.children) ? "" : 'operator'
    }`}
    onClick = {() =>props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
