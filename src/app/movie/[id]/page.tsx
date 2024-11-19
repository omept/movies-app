"use client";
import MovieContainer from "@/components/MovieContainer";
import VideoPlayer from "@/components/VideoPlayer";
import { getImagePath } from "@/lib/getImagePath";
import {
  getMovieDetails,
  getMovieVideos,
  getPopularMovies,
} from "@/lib/getMovies";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { Movie } from "../../../../type";

interface Props {
  params: {
    id: string;
  };
}

const MovieDetails = ({ params }: Props) => {
  const [id, setId] = useState("");
  const [details, setDetails] = useState<any>({});
  const [popoularMovies, setPopoularMovies] = useState([]);

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
      }
    };

    if (id?.length) {
      fetchMovies();
    }
  }, [id]);

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
