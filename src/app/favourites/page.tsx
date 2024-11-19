"use client";
import MovieContainer from "@/components/MovieContainer";
import { useEffect, useState } from "react";
interface Props {
  searchParams: {
    title: string;
  };
}

const FavouriteMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movies from localStorage on component mount
  useEffect(() => {
    const storedMovies = JSON.parse(
      localStorage.getItem("favoriteMovies") ?? "[]"
    );
    setMovies(storedMovies);
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold px-10 mb-5">Favourite Movies</h2>
      <MovieContainer movies={movies} />
    </div>
  );
};

export default FavouriteMoviesPage;
