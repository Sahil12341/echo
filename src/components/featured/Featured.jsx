import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Echo Admin Here!</b>Find out about my crazy Ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
            libero!
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fuga
            quaerat neque. Nulla mollitia repellat ea cumque, quibusdam sint
            labore.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
