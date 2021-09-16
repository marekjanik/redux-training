import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import { ButtonPanel } from '../button-panel';

export const MoviesForm: React.FC = () => {
  const { title, moviesDescription, buttonsData, onSubmit, onChange } =
    useComponent();

  return (
    <section className={styles.moviesFormContainer}>
      <h1 className={styles.moviesFormTitle}>{moviesDescription}</h1>
      <form onSubmit={onSubmit} className={styles.moviesForm}>
        <input
          value={title}
          onChange={onChange}
          className={styles.moviesFormInput}
        />
        <ButtonPanel buttons={buttonsData} />
      </form>
    </section>
  );
};
