"use client";

import type { Socials } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const socialsData: Socials[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/DVfrontend",
    logo: "/icons/github.png",
  },
  {
    id: 2,
    name: "Gmail",
    url: "mailto:daniel.vartanov81@gmail.com",
    logo: "/icons/gmail.png",
  },
  {
    id: 3,
    name: "Whatsapp",
    url: "https://wa.me/995568981657",
    logo: "/icons/whatsapp.png",
  },
  {
    id: 4,
    name: "X",
    url: "https://x.com/VartanovDaniel",
    logo: "/icons/twitter.png",
  },
];

export default function About() {
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    setSocials(socialsData);
  }, []);
  return (
    <>
      <h1 className="text-4xl font-semibold">Обо мне</h1>
      <p>
        Привет! Меня зовут Даниэл, я Frontend-разработчик, увлечённый созданием
        современных и удобных пользовательских интерфейсов.
      </p>

      <br></br>

      <p>
        Я специализируюсь на React и TypeScript, уверенно работаю с HTML, CSS,
        SASS, Tailwind CSS, и инструментами вроде Next.js, Vite, Turbopack. Для
        меня важно не просто &quot;сделать, чтобы работало&quot;, а создать
        интерфейс, которым будет приятно и логично пользоваться.
      </p>

      <br></br>

      <p>
        Моя цель — постоянно расти, углубляться в технологии и совершенствовать
        свои навыки, чтобы переход от Junior к Senior был не просто
        формальностью, а результатом реального прогресса.
      </p>

      <br></br>

      <p>
        Я верю в силу чистого кода, продуманную архитектуру и грамотную работу с
        Git. Люблю разбираться в сложных задачах, оптимизировать процессы и
        доводить результат до блеска.
      </p>

      <br></br>

      <p>
        Разрабатываю проекты под личным брендом DV product — это мой способ
        объединить качество, стиль и ответственность в одном имени.
      </p>

      <br></br>

      <h2 className="text-3xl">Контакт</h2>
      <ul className="list-disc m-2 flex justify-center">
        {socials.map((social) => (
          <li key={social.id}>
            <Link href={social.url}>
              {social.logo && (
                <Image
                  src={social.logo}
                  alt={social.name}
                  width={40}
                  height={40}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
