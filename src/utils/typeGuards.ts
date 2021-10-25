import { ErrorsEnum } from "../common/enums";
import * as types from "../common/types";

export function assertIfIsOfMovieObjectType(
  input: unknown,
  errorMessage?: string
): asserts input is types.MovieObjectType {
  const instance = input as types.MovieObjectType;
  if (
    !(
      instance instanceof Object &&
      typeof instance.id === "string" &&
      typeof instance.title === "string" &&
      typeof instance.director === "string" &&
      typeof instance.premiere_date === "number"
    )
  ) {
    throw new Error(errorMessage || ErrorsEnum.type);
  }
}

export function assertIfAreOfMovieObjectType(
  input: unknown,
  error?: string
): asserts input is types.MovieObjectType[] {
  const instance = input as types.MovieObjectType[];
  if (!(instance instanceof Array)) {
    throw Error(error || ErrorsEnum.type);
  }
  instance.every((element) => assertIfIsOfMovieObjectType(element, error));
}
