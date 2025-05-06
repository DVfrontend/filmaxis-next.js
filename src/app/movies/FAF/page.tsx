"use client";
import data from "@/data/film.json";
import type { Film } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FAF() {
  const [films, setFilms] = useState<Film[]>([]);
  const targetId = 4;

  useEffect(() => {
    setFilms(data);
  }, []);

  const filteredFilms = films.filter((film) => film.id === targetId);

  return (
    <>
      {filteredFilms.map((film) => (
        <div key={film.id} className="p-6">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <Image
              src={film.poster}
              alt={film.name}
              width={250}
              height={200}
              className="border rounded-xl"
            />

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{film.name}</h1>
              <p className="text-lg">{film.fulldescription}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Трейлер фильма</h3>
            <iframe
              src={film.trailer}
              width="100%"
              height="300"
              className="rounded-xl sm:w-24"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </>
  );
}
