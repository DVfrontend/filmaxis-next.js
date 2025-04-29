// import type { Slides } from "@/types";

// const slides: Slides[] = [
//   { id: "slide1", content: "First slide", prev: "slide5", next: "slide2" },
//   { id: "slide2", content: "Second slide", prev: "slide1", next: "slide3" },
//   { id: "slide3", content: "Third slide", prev: "slide2", next: "slide4" },
//   { id: "slide4", content: "Fourth slide", prev: "slide3", next: "slide5" },
//   { id: "slide5", content: "Fifth slide", prev: "slide4", next: "slide1" },
//   { id: "slide1", content: "First slide", prev: "slide5", next: "slide2" },
//   { id: "slide2", content: "Second slide", prev: "slide1", next: "slide3" },
//   { id: "slide3", content: "Third slide", prev: "slide2", next: "slide4" },
//   { id: "slide4", content: "Fourth slide", prev: "slide3", next: "slide5" },
//   { id: "slide5", content: "Fifth slide", prev: "slide4", next: "slide1" },
// ];

// export default function TextCarousel() {
//   return (
//     <div className="relative w-full" id="carousel-progress">
//       <div className="carousel h-80 rounded-none">
//         {slides.map((slide) => (
//           <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
//             <div className="flex h-full justify-center p-6 bg-base-200/40">
//               <span className="self-center text-2xl sm:text-4xl">{slide.content}</span>
//             </div>

//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//               <a href={`#${slide.prev}`} className="btn btn-circle">❮</a>
//               <a href={`#${slide.next}`} className="btn btn-circle">❯</a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="carousel-pagination absolute start-0 end-0 top-0 flex justify-start space-x-0">
//         {slides.map((slide, i) => (
//           <span
//             key={i}
//             className="carousel-pagination-item hidden h-1 bg-base-300"
//             style={{ width: `${(i + 1) * (100 / slides.length)}%` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'
import Image from "next/image";
import { useState } from "react";

const filmFolders = [
  "avatar",
  "darkKnight",
  "dune",
  "FAF",
  "gladiator",
  "greenBook",
  "inception",
  "interstellar",
  "matrix",
  "spiderMan"
];

const images = filmFolders.map(folder => `/images/films/${folder}/image-copy.png`);


export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Картинки */}
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-64"
            fill
          />
        ))}
      </div>

      {/* Кнопки */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 px-2 py-1 rounded hover:bg-white"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 px-2 py-1 rounded hover:bg-white"
      >
        ▶
      </button>
    </div>
  );
}
