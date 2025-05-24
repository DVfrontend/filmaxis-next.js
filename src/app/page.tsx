'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import styles from '@/styles/page.module.scss';
import Bg from '@/components/ui/bg';

function Home() {
  return (
    <Bg>
      <motion.div
        className="container mx-auto mt-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ color: 'white' }} className="text-4xl font-semibold">
          Filmaxis
        </h1>
      </motion.div>

      <motion.h2
        className="text-2xl m-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Filmaxis — твой личный кино-портал, где мечты о бесконечном киномарафоне
        становятся реальностью! 🎬
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
          '✨ Более 1000 фильмов в коллекции, доступных в потрясающем качестве 4K — от культовой классики до новинок.',
          '🍿 Удобный поиск по жанру, рейтингу и году выпуска: найди именно то, что нужно, всего за пару кликов.',
          '🎥 Эксклюзивные подборки от кинокритиков и рекомендации на основе твоих предпочтений.',
          '📱 Смотри где угодно: на телевизоре, ноутбуке или смартфоне — синхронизация на всех устройствах.',
          '🌟 Еженедельные обновления: новые фильмы, трейлеры и интересные факты о киноиндустрии.',
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
        Filmaxis — это не просто сайт, это твой билет в мир кино, где каждый
        кадр — это эмоция, а каждый фильм — история. 🎟️✨
      </motion.p>
    </Bg>
  );
}

export default memo(Home)