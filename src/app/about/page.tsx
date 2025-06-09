"use client";

import type { Socials } from "@/types/socialMediaTypes";
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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4">About Me</h1>
      <p className="mb-4">
        Hi! My name is Daniel, and I&apos;m a Frontend Developer passionate
        about creating modern and user-friendly interfaces.
      </p>

      <p className="mb-4">
        I specialize in React and TypeScript and work confidently with HTML,
        CSS, SASS, Tailwind CSS, and tools like Next.js, Vite, and Turbopack.
        For me, it&apos;s not just about &quot;making it work&quot; but crafting
        an interface that&apos;s pleasant and intuitive to use.
      </p>

      <p className="mb-4">
        My goal is to keep growing, diving deeper into technology, and honing my
        skills so that the journey from Junior to Senior is not just a formality
        but a reflection of real progress.
      </p>

      <p className="mb-4">
        I believe in clean code, thoughtful architecture, and good Git
        practices. I love tackling challenging problems, optimizing processes,
        and polishing results to perfection.
      </p>

      <p className="mb-8">
        I develop projects under my personal brand — DV product — as my way to
        combine quality, style, and responsibility in one name.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <ul className="flex flex-wrap justify-center gap-6">
        {socials.map((social) => (
          <li key={social.id}>
            <Link href={social.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.logo}
                alt={social.name}
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
