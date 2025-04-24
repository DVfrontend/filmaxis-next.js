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