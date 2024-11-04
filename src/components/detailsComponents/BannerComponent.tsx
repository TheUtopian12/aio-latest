"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./BannerMovieStyles.css";
import { movieById } from "@/lib/api";
import BannerComponentDetails from "./BannerComponentDetails";

interface PropsMovie {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  genres: string[];
}

const BannerComponent = ({ mediaId }: { mediaId: string }) => {
  const [movieData, setMovieData] = useState<PropsMovie>();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await movieById(mediaId);
        setMovieData(data);
      } catch (error) {
        console.error("Error al obtener los datos de la película:", error);
      }
    };

    fetchMovieData();
  }, []);
  return (
    <>
      {movieData ? (
        <BannerComponentDetails
          title={movieData.title}
          genres={movieData.genres}
          overview={movieData.overview}
          poster_path={movieData.poster_path}
          release_date={movieData.release_date}
          vote_average={movieData.vote_average}
        />
      ) : (
        <div className="absolute top-[50%] left-[50%]">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </>
  );
};

export default BannerComponent;
