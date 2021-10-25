import { select, put, call, takeLatest } from "typed-redux-saga";
import { FETCH_MOVIES_LIST_START } from "../types";
import { storeMovies } from "../actions";
import { selectMoviesList } from "../selectors";
import { EndpointsEnum, MethodsEnum, ErrorsEnum } from "../../../common";
import { produce, assertIfAreOfMovieObjectType } from "../../../utils";

function* onFetchMoviesList() {
  const moviesList = produce(yield* select(selectMoviesList), (draft) => draft);

  const fetchedData = yield* call(() => onFetchOuterData());
  if (typeof fetchedData === "string") {
    alert(fetchedData);
    return;
  }

  const moviesToBeStored = [...moviesList, ...fetchedData];
  yield* put(storeMovies(moviesToBeStored));
}

function* onFetchOuterData() {
  try {
    const response = yield* call(() =>
      fetch(EndpointsEnum.FETCH_MOVIES_LIST, {
        method: MethodsEnum.GET,
      })
    );
    const data: unknown = yield* call(() => response.json());
    assertIfAreOfMovieObjectType(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return ErrorsEnum.fetch;
    }
  }
}

export function* onFetchMoviesListStart() {
  yield* takeLatest<typeof FETCH_MOVIES_LIST_START, typeof onFetchMoviesList>(
    FETCH_MOVIES_LIST_START,
    onFetchMoviesList
  );
}
