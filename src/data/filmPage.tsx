'use client'
import data from './films.json';
import type { Film } from '@/types';
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function FilmPage() {
  const [films, setFIlms] = useState<Film[]>([]);

  useEffect(() => {
    setFIlms(data);
  }, []);
  return (
    <>
      {films.map((film) => (
        <div key={film.id}>
          <Image src={film.poster} alt={film.name} width={200} height={200} className='border rounded-xl'/>
          <p>{film.fulldescription}</p>
          </div>
        
      ))}
    </>
  )
}