"use client";

import styles from "@/styles/Bg.module.scss";
import React, { useEffect, useState } from "react";

const images: string[] = [
  "/images/films/another/image.png",
  "/images/films/another/image-copy.png",
  "/images/films/another/image-copy-1.png",
  "/images/films/another/image-copy-2.png",
  "/images/films/another/image-copy-3.png",
  "/images/films/another/image-copy-4.png",
  "/images/films/another/image-copy-5.png",
  "/images/films/another/image-copy-6.png",
  "/images/films/another/image-copy-7.png",
  "/images/films/another/image-copy-8.png",
  "/images/films/another/image-copy-9.png",
  "/images/films/another/image-copy-10.png",
];

type Bg = {
  children: React.ReactNode;
};

export default function Bg({ children }: Bg) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.backgroundSlider}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : null}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
