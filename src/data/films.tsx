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
      <h1 className="text-3xl font-bold">Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link href={film.href}><span className="font-bold flex justify-center m-2 text-xl">{film.name}</span>{film.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FIlms;
