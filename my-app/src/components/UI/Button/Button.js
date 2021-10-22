import React from 'react';

// import './Button.css'
import styles from './Button.module.css'
// import cx from classnames


const Button = props => {

  const buttonStyling = props.isReady ? styles.button : [styles.button, styles.invalid].join(' ');

  return (
    <button type={props.type} className={buttonStyling} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
