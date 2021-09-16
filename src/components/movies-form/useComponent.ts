import { ChangeEventHandler, useState, useCallback, useMemo } from 'react';
import { useDataPersister } from './useDataPersister';
import { useDataProvider } from './useDataProvider';
import { ButtonPropsType } from '../button';
import { ErrorsEnum } from '../../common/enums';
import { uuid } from '../../utils/uuid';

type UseComponentType = {
  title: string;
  moviesDescription: string;
  buttonsData: ButtonPropsType[];
  onSubmit: ChangeEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const useComponent = (): UseComponentType => {
  const [title, setTitle] = useState<string>('');
  const trimmedTitle = title.trim();
  const { isMovieOfGivenTitleAlreadyOnTheList, moviesDescription } =
    useDataProvider(trimmedTitle);
  const { addMovieToList, removeMovieFromList } = useDataPersister();

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
            alert(ErrorsEnum.empty_title);
            return;
          }
          if (isMovieOfGivenTitleAlreadyOnTheList) {
            alert(ErrorsEnum.add_present_element);
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
            alert(ErrorsEnum.empty_title);
            return;
          }
          if (!isMovieOfGivenTitleAlreadyOnTheList) {
            alert(ErrorsEnum.remove_absent_element);
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
    moviesDescription,
    buttonsData,
    onSubmit,
    onChange,
  };
};
