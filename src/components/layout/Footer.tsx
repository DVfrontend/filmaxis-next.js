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

export default function Footer() {
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    setSocials(socialsData);
  }, []);

  return (
    <footer className="p-5 border-t text-white bottom-0 left-0 right-0 flex flex-col items-center gap-4 sm:flex-row sm:justify-around sm:items-center">
      <Link
        href="/subscribe"
        className="inline-block border border-white rounded-full px-6 py-2 my-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-xl hover:scale-105"
      >
        Subscribe
      </Link>

      <div className="flex gap-4">
        {socials.map((social) => (
          <Link key={social.id} href={social.url}>
            {social.logo && (
              <Image
                src={social.logo}
                alt={social.name}
                width={25}
                height={25}
              />
            )}
          </Link>
        ))}
      </div>

      <p className="text-center">
        {new Date().getDate()} / {new Date().getMonth() + 1} /{" "}
        {new Date().getFullYear()}
      </p>
      <p className="text-center">&copy; DV product</p>
    </footer>
  );
}
