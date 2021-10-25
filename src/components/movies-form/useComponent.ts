import { ChangeEventHandler, useState, useCallback, useMemo } from "react";
import { useDataPersister } from "./useDataPersister";
import { useDataProvider } from "./useDataProvider";
import { ButtonPropsType } from "../button";
import { ErrorsEnum } from "../../common/enums";
import { uuid } from "../../utils/uuid";

type UseComponentType = {
  title: string;
  moviesDescription: string;
  buttonsData: ButtonPropsType[];
  onSubmit: ChangeEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const useComponent = (): UseComponentType => {
  const [title, setTitle] = useState<string>("");
  const trimmedTitle = title.trim();
  const { moviesDescription } = useDataProvider();
  const { addMovie, removeMovie } = useDataPersister();

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
        description: "add movie",
        type: "submit",
        id: uuid(),
        className: "submitButton",
        onClick: () => {
          if (trimmedTitle.length === 0) {
            alert(ErrorsEnum.empty_title);
            return;
          }
          addMovie(trimmedTitle);
          setTitle("");
        },
      },
      {
        description: "remove movie",
        type: "button",
        id: uuid(),
        className: "removeButton",
        onClick: () => {
          if (trimmedTitle.length === 0) {
            alert(ErrorsEnum.empty_title);
            return;
          }
          removeMovie(trimmedTitle);
          setTitle("");
        },
      },
    ],
    [trimmedTitle, addMovie, removeMovie]
  );

  return {
    title,
    moviesDescription,
    buttonsData,
    onSubmit,
    onChange,
  };
};
