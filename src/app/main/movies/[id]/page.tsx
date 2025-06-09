"use client";

import React from "react";
import movies from "@/data/movies.json";
import Image from "next/image";

export default function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <h1 className="text-center font-bold text-xl mt-10">Movie not found</h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{movie.name}</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Image
          src={movie.poster}
          alt={movie.name}
          width={250}
          height={350}
          className="rounded-2xl object-cover"
        />
        <p className="text-gray-200">{movie.fullDescription}</p>
      </div>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={`${movie.name} Trailer`}
          className="rounded-2xl"
          allowFullScreen
        />
      </div>
    </div>
  );
}
