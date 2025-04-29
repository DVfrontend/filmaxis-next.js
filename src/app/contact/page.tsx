'use client'

import type { Socials } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";

const social: Socials[] = [
  { id: 1, name: "GitHub", url: "https://github.com/Daniel2009Daniel", logo: ""
  },
  { id: 2, name: "Gmail", url: "mailto:daniel.vartanov81@gmail.com", logo: ""
  },
  { id: 3, name: "Whatsapp", url: "https://wa.me/995568981657", logo: ""
  },
  { id: 4, name: "X", url: "https://x.com/VartanovDaniel", logo: ""
  }
];

export default function Contact() {
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    setSocials(social);
  }, []);
  return (
    <>
      <h1 className="text-4xl font-semibold">Контактые данные</h1>
      {/* <main className="min-h-screen flex items-center justify-center px-4">
        <div className="rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-6">
            Свяжись с нами
          </h1>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium  mb-1">
                Имя
              </label>
              <input type="text" placeholder="Ваше имя" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-1">
                Email
              </label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-1">
                Сообщение
              </label>
              <textarea rows={4} placeholder="Напишите нам..." className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Отправить
            </button>
          </form>
        </div>
      </main> */}

      <h1 className="text-2xl font-bold">Связаться со мной</h1>
      <ul className="list-disc">
        {social.map((social) => (
          <li key={social.id}>
            <Link href={social.url}>{social.logo}<b>{social.name}</b></Link>
          </li>
        ))}
      </ul>
    </>
  );
}
