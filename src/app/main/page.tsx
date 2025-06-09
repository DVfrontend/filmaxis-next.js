"use client";

import data from "@/data/movies.json";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export type Film = {
  id: number;
  name: string;
  description: string;
  href: string;
  poster: string;
  fullDescription: string;
  trailer: string;
};

export default function Main() {
  const [movies, setMovies] = useState<Film[]>([]);

  useEffect(() => {
    setMovies(data);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Movies
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <Link href={`main/movies/${movie.id}`} key={movie.id}>
            <motion.div
              className="bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:ring-1 hover:ring-gray-500 transition duration-300 cursor-pointer flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={movie.poster}
                  alt={movie.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-white">
                  {movie.name}
                </h2>
                <p className="text-gray-400 text-sm">{movie.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
