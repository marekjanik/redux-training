import { useState, useCallback, useMemo } from 'react';
import { useDataPersister } from './useDataPersister';
import { useDataProvider } from './useDataProvider';
import { uuid } from '../../utils/uuid';
import { errors } from '../../common/errors';

export const useComponent = () => {
  const { addMovieToList, removeMovieFromList } = useDataPersister();
  const { isMovieOfGivenTitleAlreadyOnTheList } = useDataProvider();
  const [title, setTitle] = useState('');
  const trimmedTitle = title.trim();

  const onSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const buttonsData = useMemo(
    () => [
      {
        id: uuid(),
        className: 'submitButton',
        type: 'submit',
        description: 'add movie',
        onClick: () => {
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
        },
      },
      {
        id: uuid(),
        className: 'removeButton',
        type: 'button',
        description: 'remove movie',
        onClick: () => {
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
        },
      },
    ],
    [
      trimmedTitle,
      isMovieOfGivenTitleAlreadyOnTheList,
      addMovieToList,
      removeMovieFromList,
    ]
  );

  return {
    title,
    buttonsData,
    onSubmit,
    onChange,
  };
};
