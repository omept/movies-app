"use client";
import MovieContainer from "@/components/MovieContainer";
import { getImagePath } from "@/lib/getImagePath";
import { getMovieDetails, getPopularMovies } from "@/lib/getMovies";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../../../../type";

type Params = Promise<{ id: string }>;

const MovieDetails = ({ params }: { params: Params }) => {
  const [id, setId] = useState("");
  const [details, setDetails] = useState<any>({});
  const [popoularMovies, setPopoularMovies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getid = async () => {
      const { id } = await params;
      setId(id);
    };
    getid();
  }, [params]);

  useEffect(() => {
    const ppM = async () => {
      const pops: any = await getPopularMovies();
      setPopoularMovies(pops);
    };
    ppM();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const detls: any = await getMovieDetails(id);
        setDetails(detls);
      } catch (error) {
        console.error("Error fetching movie videos:", error);
        alert("Could not fetch this movie.");
      }
    };

    if (id?.length) {
      fetchMovies();
    }
  }, [id]);

  useEffect(() => {
    try {
      const storedMovies =
        JSON.parse(localStorage.getItem("favoriteMovies") ?? "[]") || [];
      const isFavorite = storedMovies.some(
        (movie: { id: string | number }) => movie.id == id
      );
      setIsFavorite(isFavorite);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const addToFav = (details: any) => {
    if (!details) return;
    const movie: Movie = details;
    const storedMovies =
      JSON.parse(localStorage.getItem("favoriteMovies") ?? "[]") || [];
    const moviesSet = new Set(storedMovies.map(JSON.stringify)); // Use JSON.stringify for comparison
    moviesSet.add(JSON.stringify(movie));
    const updatedMovies = Array.from(moviesSet)
      .map((movieString: any) => {
        try {
          return JSON.parse(movieString); // Safely parse JSON strings
        } catch (e) {
          console.error("Failed to parse movie:", movieString, e);
          return null; // Handle or skip invalid entries
        }
      })
      .filter(Boolean);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedMovies));
    alert("Saved to favourites.");
    setIsFavorite(true);
  };

  const delFromFav = (id: string | number) => {
    if (!id) return;
    const storedMovies =
      JSON.parse(localStorage.getItem("favoriteMovies") ?? "[]") || [];
    const updatedMovies = storedMovies.filter(
      (movie: { id: string | number }) => movie.id != id
    );
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedMovies));
    alert("Removed from favourites.");
    setIsFavorite(false);
  };

  const favBlock = (
    details: any,
    delFromFav: (id: string | number) => void,
    addToFav: (details: any) => void
  ) => {
    return isFavorite ? (
      <button
        onClick={() => {
          delFromFav(details.id);
        }}
        className="font-bold py-2 px-4 rounded bg-red-500 text-white hover:bg-red-700"
      >
        Remove from Favourite
      </button>
    ) : (
      <button
        onClick={() => addToFav(details)}
        className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Add to Favourite
      </button>
    );
  };

  return (
    <div>
      <div className="px-10">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-1/2 min-h-96 rounded-md overflow-hidden group">
            <Image
              src={getImagePath(details?.backdrop_path)}
              alt={details?.title ?? ""}
              width={1920}
              height={1080}
              className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold underline decoration-[1px]">
              {details?.original_title}
            </h2>
            <p className="text-sm leading-6 tracking-wide mt-2">
              {details?.overview}
            </p>
            <p className=" text-sm">
              IMDB: <span className="font-medium">{details.vote_average}</span>
            </p>
            <p className=" text-sm">
              Votes: <span className="font-medium">{details.vote_count}</span>
            </p>
            <p className=" text-sm">
              Release Data:{" "}
              <span className="font-medium">{details.release_date}</span>
            </p>
            <p className=" text-sm">
              Genres:{" "}
              {details?.genres?.map((item: any) => (
                <span key={item?.id} className="font-medium mr-1">
                  {item?.name},
                </span>
              ))}
            </p>
            <p className=" text-sm">
              Tag Line: <span className="font-medium">{details.tagline}</span>
            </p>
            <p className=" text-sm">
              Status:{" "}
              <span
                className={`font-medium ${
                  details?.status === "Released"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {details.status}
              </span>
            </p>
            {details?.id ? <>{favBlock(details, delFromFav, addToFav)}</> : ""}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <MovieContainer movies={popoularMovies} title="Popular Movies" />
      </div>
    </div>
  );
};

export default MovieDetails;
