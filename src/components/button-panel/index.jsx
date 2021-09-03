import React from 'react';
import Button from '../button/index';
import styles from './styles.module.css';

const renderButtons = (buttons) => {
  return buttons.map((button) => (
    <Button
      key={button.description}
      type={button.type}
      className={button.className}
      onClick={button.onClick}
      description={button.description}
    >
      {button.description}
    </Button>
  ));
};

const ButtonPanel = ({ buttons }) => {
  return <div className={styles.buttonPanel}>{renderButtons(buttons)}</div>;
};

export default ButtonPanel;
