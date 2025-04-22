"use client";

// import styles from './page.module.sass'
import Films from '@/data/films';
// import Card from "../../../components/ui/Card";
// import { ThemeProvider } from "../../hooks/context/ThemeContext";

export default function Main() {
  return (
    <>
      <div className="grid ">
      <Films />
      </div>
      {/* <div className="grid grid-cols-3 gap-4">
        <Card />
      </div> */}
    </>
  );
}
