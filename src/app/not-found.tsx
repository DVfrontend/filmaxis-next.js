'use client'

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.scss";

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.push("/pages/main")
    }, 5000)
  },[router])
  return (
    <div className={`${styles.body} `}>
      <div className="flex justify-center items-center">
        <Image
          src="/404.jpg"
          alt="404"
          width={400}
          height={400}
          className="mx-auto"
        ></Image>
      </div>
      <div>
        <h1 className="text-2xl">Not found – Error 404!</h1>
        <h2 className="text-xl">Within 5 seconds you will automatically return to the main page</h2>
      </div>
    </div>
  );
}
