import Image from "next/image";
import Link from "next/link";
import styles from './card.module.css'
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>11.02.2025 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nam!</p>
      </div>
      <Link href='/' className={styles.link}>Read More</Link>
    </div>
  );
};

export default Card;
