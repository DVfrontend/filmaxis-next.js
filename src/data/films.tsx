'use client'

import data from "@/data/films.json";
import { useEffect, useState } from "react";
import type { Film } from "@/types";
import Link from "next/link";

function FIlms() {
  const [films, setFIlms] = useState<Film[]>([]);

  useEffect(() => {
    setFIlms(data);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold">Все Фильмы</h1>
        {films.map((film) => (
            <Link href={film.href} key={film.id}><span className="font-bold flex justify-center m-2 text-xl">{film.name}</span>{film.description}</Link>
        ))}
    </div>
  );
}

export default FIlms;
