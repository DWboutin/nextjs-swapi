import { mergeDeepRight } from "ramda";
import { FilmsStore, filmsStore } from "store/stores/films";
import { create, StoreApi, UseBoundStore } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface AppState {
  films: FilmsStore;
}

export type GetAppState = StoreApi<AppState>["getState"];
export type SetAppState = StoreApi<AppState>["setState"];
export type SubStoreArgs = { get: GetAppState; set: SetAppState };
export let appStore: UseBoundStore<StoreApi<AppState>>;

const storeGenerator = (set: SetAppState, get: GetAppState): AppState => ({
  films: filmsStore({ get, set }),
});

const storeMerge = (persistedState: any, currentState: any) => {
  return mergeDeepRight(currentState, persistedState);
};

const store = persist(storeGenerator, {
  name: "app-store",
  merge: storeMerge,
  serialize: (data) => {
    return JSON.stringify(data);
  },
  deserialize: (value) => {
    const data = JSON.parse(value);
    return data;
  },
});

appStore = create(devtools(immer(store)));
