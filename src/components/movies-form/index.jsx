import React from 'react';
import { useComponent } from './useComponent';
import { useDataProvider } from './useDataProvider';
import ButtonPanel from '../button-panel/index';
import styles from './styles.module.css';

const MoviesForm = () => {
  const { title, buttonsData, onSubmit, onChange } = useComponent();
  const { moviesDescription } = useDataProvider();

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

export default MoviesForm;
