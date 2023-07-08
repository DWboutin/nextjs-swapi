import { produce } from "immer";
import { SwapiFactory } from "store/factories/SwapiFactory";
import { Film } from "store/factories/types";
import { httpRequestHandler } from "store/requests/httpRequestHandler";
import { AppState, SubStoreArgs } from "store/store";

export interface FilmsStore {
  films: Film[];
  fetchFilms: () => Promise<void>;
  searchFilms: (searchString: string) => Promise<void>;
}

export const filmsStore = ({ get, set }: SubStoreArgs): FilmsStore => ({
  films: [],
  fetchFilms: async () => {
    const response = await httpRequestHandler.get(
      `${process.env.NEXT_PUBLIC_SWAPI_URL}films/`
    );
    const films = SwapiFactory.formatFilms(response);

    set(
      produce((draft: AppState) => {
        draft.films.films = films;

        return draft;
      })
    );
  },
  searchFilms: async (searchString: string) => {
    const response = await httpRequestHandler.get(
      `${process.env.NEXT_PUBLIC_SWAPI_URL}films/?search=${encodeURI(
        searchString
      )}`
    );

    console.log(response);
  },
});
