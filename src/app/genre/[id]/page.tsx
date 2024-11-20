import MovieContainer from "@/components/MovieContainer";
import { getDiscoverMovies } from "@/lib/getMovies";

type Params = Promise<{ id: string }>;

const GenrePage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { id } = await params;
  const genre = (await searchParams).genre;

  const movies = await getDiscoverMovies(id);
  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mb-5">Results for {genre}</h2>
      <MovieContainer movies={movies} title="Genre" />
    </div>
  );
};

export default GenrePage;
