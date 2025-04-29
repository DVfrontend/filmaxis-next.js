'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
type Nav = {
  id: number;
  title: string;
  path: string;
};

const nav: Nav[] = [
  { id: 1, title: "Главная", path: '/main' },
  { id: 2, title: "Подписаться", path: '/subscribe' },
  { id: 3, title: "Контакт", path: '/contact' },
  { id: 4, title: "Про меня", path: '/about' },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="p-4 border-b  text-white fixed top-0 right-0 left-0 flex justify-between backdrop-blur-md">
        <div>
        {nav.map(({ id, title, path }) => (
          <Link key={id} href={path} className='m-3'>
            <span className={pathname === path ? "text-blue-500" : undefined}>
              {title}
            </span>
          </Link>
        ))}
      </div>
        </div>
    </nav>
  );
}

export default Navbar