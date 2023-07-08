import { Film } from "store/factories/types";

export class SwapiFactory {
  static formatFilms(films: { results: any[] }): Film[] {
    return films.results
      .map((film) => ({
        title: film.title,
        episodeId: film.episode_id,
        openingCrawl: film.opening_crawl,
        director: film.director,
        producer: film.producer,
        releaseDate: film.release_date,
        created: film.created,
        edited: film.edited,
        url: film.url,
      }))
      .sort((a, b) => {
        return a.episodeId - b.episodeId;
      });
  }
}
