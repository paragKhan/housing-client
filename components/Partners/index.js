import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

export default function Partners() {
  return (
    <Marquee gradient={false}>
      <div className={styles.partners}>
        <img src="/img/partners/aa-builders.png" alt="" />
        <img src="/img/partners/adobe-homes.png" alt="" />
        <img src="/img/partners/ironwood-apartments.png" alt="" />
        <img src="/img/partners/rosewood-homes.png" alt="" />
        <img src="/img/partners/the-capitals.png" alt="" />
      </div>
    </Marquee>
  );
}
