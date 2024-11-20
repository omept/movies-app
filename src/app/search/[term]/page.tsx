import MovieContainer from "@/components/MovieContainer";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

const SearchPage = async ({
  params,
}: {
  params: Promise<{ term: string }>;
}) => {
  const { term } = await params;
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mb-5">Results for {termToUse}</h2>
      <MovieContainer movies={movies} title="Searched Movies" />
      <MovieContainer movies={popularMovies} title="You may also like" />
    </div>
  );
};

export default SearchPage;
