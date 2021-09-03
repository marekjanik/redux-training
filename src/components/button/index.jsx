import React from 'react';
import styles from './styles.module.css';

const Button = ({ type, onClick, description, className }) => {
  return (
    <button type={type} onClick={onClick} className={styles[className]}>
      {description}
    </button>
  );
};

export default Button;
