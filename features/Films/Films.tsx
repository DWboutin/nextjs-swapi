"use client";

import { FilmCard } from "features/Films/FilmCard";
import { ReactNode, useEffect } from "react";
import { AppState, appStore } from "store/store";

interface FilmsProps {
  children: ReactNode;
}

export const Films = () => {
  const fetchFilms = appStore((state: AppState) => state.films.fetchFilms);
  const films = appStore((state: AppState) => state.films.films);

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div className="flex flex-row gap-3">
      {films.map(({ title, episodeId, openingCrawl, director }) => (
        <FilmCard
          key={`film-card-${episodeId}`}
          title={title}
          openingCrawl={openingCrawl}
          director={director}
        />
      ))}
    </div>
  );
};
