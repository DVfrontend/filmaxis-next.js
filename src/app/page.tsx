"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import styles from "@/styles/page.module.scss";
import Bg from "@/components/ui/Bg";

function Home() {
  return (
    <Bg>
      <motion.div
        className="container mx-auto mt-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ color: "white" }} className="text-4xl font-semibold">
          Filmaxis
        </h1>
      </motion.div>

      <motion.h2
        className="text-2xl m-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Filmaxis — your personal cinema portal where your dreams of endless
        movie marathons come true! 🎬
      </motion.h2>

      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          "✨ Over 1,000 movies in our collection, available in stunning 4K quality — from cult classics to the latest releases.",
          "🍿 Convenient search by genre, rating, and release year: find exactly what you need in just a couple of clicks.",
          "🎥 Exclusive selections from film critics and recommendations based on your preferences.",
          "📱 Watch anywhere: on your TV, laptop, or smartphone — with seamless synchronization across all devices.",
          "🌟 Weekly updates: new films, trailers, and fascinating facts about the world of cinema.",
        ].map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
          >
            {text}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-6 mx-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Filmaxis isn&apos;t just a website — it&apos;s your ticket to the world
        of cinema, where every frame is an emotion and every movie tells a
        story. 🎟️✨
      </motion.p>
    </Bg>
  );
}

export default memo(Home);
