import { useState } from 'react';
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
      description: 'add movie',
      type: 'submit',
      className: 'submitButton',
      onClick: onAddMovie,
    },
    {
      description: 'remove movie',
      type: 'button',
      className: 'removeButton',
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
