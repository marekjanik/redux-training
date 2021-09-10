import React from 'react';
import styles from './styles.module.css';
import { IdType } from '../../common/types';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export type ButtonPropsType = {
  id: IdType;
  className: string;
  type: ButtonType;
  description: string;
  onClick: VoidFunction;
};

const Button: React.FC<ButtonPropsType> = ({
  type,
  onClick,
  description,
  className,
}) => {
  return (
    <button type={type} onClick={onClick} className={styles[className]}>
      {description}
    </button>
  );
};

export default Button;
