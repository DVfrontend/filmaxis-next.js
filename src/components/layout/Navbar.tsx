// import styles from "../ui/navbar.module.scss";
// import Form from "./form";
'use client'

// import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
// import styles from '../ui/Navbar.module.scss';

type Nav = {
  id: number;
  title: string;
  path: string;
};

const nav: Nav[] = [
  { id: 1, title: "Main", path: '/pages/main' },
  { id: 2, title: "Contact", path: '/pages/contact' },
  { id: 3, title: "About", path: '/pages/about' },
  { id: 4, title: "Log in", path: '/pages/logIn' },
  { id: 5, title: "Subscribe", path: '/pages/subscribe' },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="bg-gray-950 p-4 border-b-1 border-gray-800 text-white fixed top-0 right-0 left-0">
            {/* <Link href="/pages/main" className="font-bold inline-block px-3 border-b duration-300">
              <h1 className="hover:shadow-lg shadow-white/40">Main</h1>
            </Link>
          сделать актив 
            <Link href="/pages/contact" className="font-bold inline-block px-3 hover:border-b duration-300">Contact</Link>
            <Link href="/pages/about" className="font-bold inline-block px-3 hover:border-b duration-300">About</Link>
            <Link href="/pages/subscribe"></Link>
            <Link href="/pages/login" className="font-bold inline-block px-3 hover:border-b duration-300 text-right">Log in</Link>
        <Link href="/pages/login" className="font-bold inline-block px-3 hover:border-b duration-300 text-right">Subscribe</Link> */}
        <div>
        {nav.map(({ id, title, path }) => (
          <Link key={id} href={path} className='m-3'>
            <span className={pathname === path ? "color-blue" : undefined}>
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