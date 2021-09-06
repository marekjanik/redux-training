import { useState } from 'react';
import { uuid } from '../../utils/uuid';
import { useDataPersister } from './useDataPersister';
import { useDataProvider } from './useDataProvider';
import { errors } from '../../common/errors';

export const useComponent = () => {
  const { addMovieToList, removeMovieFromList } = useDataPersister();
  const { isMovieOfGivenTitleAlreadyOnTheList } = useDataProvider();
  const [title, setTitle] = useState('');
  const trimmedTitle = title.trim();

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const onAddMovie = () => {
    if (trimmedTitle.length === 0) {
      alert(errors.empty_title);
      return;
    }

    if (isMovieOfGivenTitleAlreadyOnTheList(trimmedTitle)) {
      alert(errors.add_present_element);
      return;
    }

    addMovieToList(trimmedTitle);
    setTitle('');
  };

  const onRemoveMovie = () => {
    if (trimmedTitle.length === 0) {
      alert(errors.empty_title);
      return;
    }

    if (!isMovieOfGivenTitleAlreadyOnTheList(trimmedTitle)) {
      alert(errors.remove_absent_element);
      return;
    }

    removeMovieFromList(trimmedTitle);
    setTitle('');
  };

  const buttonsData = [
    {
      id: uuid(),
      className: 'submitButton',
      type: 'submit',
      description: 'add movie',
      onClick: onAddMovie,
    },
    {
      id: uuid(),
      className: 'removeButton',
      type: 'button',
      description: 'remove movie',
      onClick: onRemoveMovie,
    },
  ];

  return {
    title,
    buttonsData,
    onSubmit,
    onChange,
  };
};
