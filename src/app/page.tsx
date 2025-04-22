// import Link from "next/link";
// import styles from "../ui/first.module.scss";
// import Button from "../components/button";

export default function First() {
  return (
    <>
      <>
        <div className="container mx-auto mt-3">
          <h1 style={{ color: "white" }} className="text-4xl mt-3">
            Cinema Web
          </h1>
        </div>
        <br></br>

        <h2 className="text-2xl m-3">
          Cinema Web — your personal movie portal where dreams of an endless
          movie marathon become a reality! 🎬
        </h2>
        <br></br>
        <ul>
          <li>
            ✨ Over 1000 movies in the collection, available in stunning 4K
            quality — from cult classics to the latest releases.
          </li>
          <li>
            🍿 Convenient search by genre, rating, and release year: find
            exactly what you need in just a few clicks.
          </li>
          <li>
            🎥 Exclusive selections from film critics and recommendations based
            on your preferences.
          </li>
          <li>
            📱 Watch anywhere: on your TV, laptop, or smartphone — synchronized
            across all devices.
          </li>
          <li>
            🌟 Weekly updates: new movies, trailers, and interesting facts about
            the film industry.
          </li>
        </ul>
        <br></br>
        <p>
          Cinema Web is not just a website — it is your ticket to the world of
          cinema, where every frame is an emotion and every movie is a story.
          🎟️✨
        </p>

        {/* <Link href="ru/pages/home" className={styles.button}>Русский</Link>
        <Link href="ru/pages/home" className={styles.button}>English</Link> */}

        {/* <Link to="/pages/home" className={styles.button}>
          Start watching
        </Link> подтвурдить*/}
      </>
    </>
  );
}
