import MovieContainer from "@/components/MovieContainer";
interface Props {
  searchParams: {
    title: string;
  };
}

const FavouriteMoviesPage = async () => {
  let movies: any = null;
  movies = [];

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold px-10 mb-5">Favourite Movies</h2>
      <MovieContainer movies={movies} isVertical={false} />
    </div>
  );
};

export default FavouriteMoviesPage;
