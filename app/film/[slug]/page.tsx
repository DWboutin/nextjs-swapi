"use client";

import { useEffect } from "react";
import { AppState, appStore } from "store/store";
import { convertSlugToText } from "utils/convertToSlug";

export default function FilmPage({ params }: { params: { slug: string } }) {
  const filmName = convertSlugToText(params.slug);
  const searchFilms = appStore((state: AppState) => state.films.searchFilms);

  useEffect(() => {
    searchFilms(filmName);
  }, []);

  return <div className="container mx-auto">{filmName}</div>;
}
