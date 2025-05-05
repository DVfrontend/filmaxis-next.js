"use client";
import data from "./film.json";
import type { Film } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FilmPage() {
  const [films, setFilms] = useState<Film[]>([]);
  const targetId = 1;

  useEffect(() => {
    setFilms(data);
  }, []);

  const filteredFilms = films.filter((film) => film.id === targetId);

  return (
    <>
      {filteredFilms.map((film) => (
        <div key={film.id}>
          <Image
            src={film.poster}
            alt={film.name}
            width={200}
            height={200}
            className="border rounded-xl"
          />
          <h1 className="text-2xl">{film.name}</h1>
          <p>{film.fulldescription}</p>
          <iframe src={film.trailer} />
        </div>
      ))}
    </>
  );
}
