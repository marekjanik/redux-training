import React from 'react';
import { useComponent } from './useComponent';
import ButtonPanel from '../button-panel/index';
import styles from './styles.module.css';

const MoviesForm = () => {
  const { title, buttonsData, onSubmit, onChange } = useComponent();

  return (
    <section className={styles.moviesFormContainer}>
      <h1 className={styles.moviesFormTitle}>Favourite Movies List</h1>
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

// buttonsData.map((button) => (
//   <button
//     type="submit"
//     key={button.description}
//     onClick={button.onClick}
//   >
//     {button.description}
//   </button>
// ))

export default MoviesForm;
