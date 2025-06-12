"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Nav = {
  id: number;
  title: string;
  path: string;
};

const nav: Nav[] = [
  { id: 1, title: "Main", path: "/main" },
  { id: 2, title: "Subscribe", path: "/subscribe" },
  { id: 3, title: "About", path: "/about" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-[#1C1C1C]/70 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <div className="text-xl font-bold text-white">Filmaxis</div>
        <div className="flex gap-6">
          {nav.map(({ id, title, path }) => (
            <Link key={id} href={path} className="relative">
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === path
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {title}
              </span>
              {pathname === path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded transition-all duration-300"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
