import Link from "next/link";
import { Film } from "store/factories/types";
import { convertTextToSlug } from "utils/convertToSlug";

interface FilmCardProps {
  title: Film["title"];
  openingCrawl: Film["openingCrawl"];
  director: Film["director"];
}

export const FilmCard = ({ title, openingCrawl, director }: FilmCardProps) => {
  return (
    <article className="flex-1 p-4 rounded-lg border border-gray-400">
      <h2 className="flex text-2xl text-center h-16 border-b border-gray-400 pb-4 box-content items-center justify-center">
        {title}
      </h2>
      <em className="flex flex-1 italic border-b border-gray-400 py-2">
        {director}
      </em>
      <div className="overflow-hidden overflow-y-auto h-28 mt-4 border-b border-gray-400 pb-4 mb-4">
        <p>{openingCrawl}</p>
      </div>
      <Link
        href={`/film/${convertTextToSlug(title)}/`}
        className="text-blue-600"
      >
        See more
      </Link>
    </article>
  );
};
