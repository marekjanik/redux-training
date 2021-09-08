import React from 'react';
import styles from './styles.module.css';
import Button from '../button/index';

const ButtonPanel = ({ buttons }) => {
  return <div className={styles.buttonPanel}>{renderButtons(buttons)}</div>;
};

const renderButtons = (buttons) => {
  return buttons.map((button) => (
    <Button
      key={button.id}
      type={button.type}
      className={button.className}
      onClick={button.onClick}
      description={button.description}
    >
      {button.description}
    </Button>
  ));
};

export default ButtonPanel;
