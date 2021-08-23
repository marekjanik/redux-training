import { useSelector, useDispatch } from 'react-redux';

import { ACTIONS } from '../../store';
import styles from './styles.module.css';

const MoviesForm = () => {
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch({ type: ACTIONS.SET_TITLE, payload: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: ACTIONS.ADD_MOVIE, payload: title });
    dispatch({ type: ACTIONS.SET_TITLE, payload: '' });
  };

  const onRemoveHandler = () => {
    dispatch({ type: ACTIONS.REMOVE_MOVIE, payload: title });
    dispatch({ type: ACTIONS.SET_TITLE, payload: '' });
  };

  return (
    <section className={styles.form}>
      <h1>My Movies List</h1>
      <form onSubmit={onSubmitHandler}>
        <input onChange={onChangeHandler} value={title} />
        <div className={styles.actions}>
          <button type="submit">Add Movie</button>
          <button onClick={onRemoveHandler} type="button">
            Remove Movie
          </button>
        </div>
      </form>
    </section>
  );
};

export default MoviesForm;
