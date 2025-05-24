'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main');
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/404.svg"
          alt="404"
          width={400}
          height={400}
          className="bg-white rounded-3xl shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-red-600 mb-2">Ошибка 404!</h1>
        <h2 className="text-xl text-gray-300">
          В течение 5 секунд вы будете перенаправлены на главную страницу.
        </h2>
      </motion.div>
    </div>
  );
}
