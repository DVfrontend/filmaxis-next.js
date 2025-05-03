"use client";

import data from "@/data/films.json";
import { useEffect, useState } from "react";
import type { Film } from "@/types";
import Link from "next/link";
import Image from "next/image";

function FIlms() {
  const [films, setFIlms] = useState<Film[]>([]);

  useEffect(() => {
    setFIlms(data);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold">Все Фильмы</h1>
      {films.map((films) => (
        <Link href={films.href} key={films.id}>
          <div className="flex items-center my-2">
            <Image
              src={films.poster}
              width={200}
              height={200}
              alt="film logo"
              className="border rounded-xl"
            />
            <div className="m-2 p-2">
              <span className="font-bold flex justify-center m-2 text-xl">
                {films.name}
              </span>
              {films.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FIlms;
