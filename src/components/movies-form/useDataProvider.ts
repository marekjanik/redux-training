import { useSelector } from "react-redux";
import { selectMoviesListDescription } from "../../models/movies/selectors";
import { StoreType } from "../../common/types";

type UseDataProviderType = {
  moviesDescription: ReturnType<typeof selectMoviesListDescription>;
};

export const useDataProvider = (): UseDataProviderType => {
  const moviesDescription = useSelector((state: StoreType) =>
    selectMoviesListDescription(state)
  );

  return {
    moviesDescription,
  };
};
