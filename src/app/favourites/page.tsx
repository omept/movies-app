"use client";
import MovieContainer from "@/components/MovieContainer";
import { useEffect, useState } from "react";
import { Movie } from "../../../type";

const FavouriteMoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedMovies = JSON.parse(
      localStorage.getItem("favoriteMovies") ?? "[]"
    );
    setMovies(storedMovies);
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold px-10 mb-5">Favourite Movies</h2>
      <MovieContainer movies={movies} hideViewMore />
    </div>
  );
};

export default FavouriteMoviesPage;
