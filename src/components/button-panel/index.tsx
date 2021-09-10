import React from 'react';
import styles from './styles.module.css';
import Button, { ButtonPropsType } from '../button/index';

type ButtonPanelPropsType = {
  buttons: ButtonPropsType[];
};

const ButtonPanel: React.FC<ButtonPanelPropsType> = ({ buttons }) => {
  return <div className={styles.buttonPanel}>{renderButtons(buttons)}</div>;
};

const renderButtons = (buttons: ButtonPanelPropsType['buttons']) => {
  return buttons.map((button) => (
    <Button
      key={button.id}
      id={button.id}
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
