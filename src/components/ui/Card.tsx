import styles from "../ui/card.module.scss";
import Image from "next/image";

export default function Card() {
  return (
    <div className={`${styles.wrap}`}>
      <Image src="/" alt="img" width={40} height={40}/>
    </div>
  );
}