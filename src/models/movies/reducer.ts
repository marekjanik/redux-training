import * as moviesActionTypes from "./types";
import { MoviesModelActionType } from "./actions";
import { ReducerType, MoviesModelStateType } from "../../common/types";
import { basic_data } from "../../common/samples";
import { produce } from "../../utils/immer";

const INITIAL_STATE = basic_data;

export const moviesReducer: ReducerType<
  MoviesModelStateType,
  MoviesModelActionType
> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesActionTypes.STORE_MOVIES:
      return produce(state, (draft) => {
        draft.list = action.moviesToBeStored;
      });
    default:
      return produce(state, () => {});
  }
};
