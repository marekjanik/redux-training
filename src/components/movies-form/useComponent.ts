import { useState, useCallback, useMemo, ChangeEventHandler } from 'react';
import { useDataPersister } from './useDataPersister';
import { useDataProvider } from './useDataProvider';
import { ButtonPropsType } from '../button';
import { uuid } from '../../utils/uuid';
import { errors } from '../../common/errors';

type UseComponentType = {
  title: string;
  onSubmit: ChangeEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  buttonsData: ButtonPropsType[];
};

export const useComponent = (): UseComponentType => {
  const { addMovieToList, removeMovieFromList } = useDataPersister();
  const { isMovieOfGivenTitleAlreadyOnTheList } = useDataProvider();
  const [title, setTitle] = useState<string>('');
  const trimmedTitle = title.trim();

  const onSubmit = useCallback<ChangeEventHandler<HTMLFormElement>>((event) => {
    event.preventDefault();
  }, []);

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setTitle(event.target.value);
    },
    []
  );

  const buttonsData = useMemo<ButtonPropsType[]>(
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
          addMovieToList(trimmedTitle, uuid());
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
    onSubmit,
    onChange,
    buttonsData,
  };
};
