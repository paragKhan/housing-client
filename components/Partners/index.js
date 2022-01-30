import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

export default function Partners() {
  return (
    <div className="bg-dark py-5">
      <div className="div text-center text-light">
        <h3>Partners</h3>
        <p>We honoured to have these amazing partners</p>
      </div>
      <Marquee gradient={false}>
        <div className={styles.partners}>
          <img src="/img/partners/aa-builders.png" alt="" />
          <img src="/img/partners/adobe-homes.png" alt="" />
          <img src="/img/partners/ironwood-apartments.png" alt="" />
          <img src="/img/partners/rosewood-homes.png" alt="" />
          <img src="/img/partners/the-capitals.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
}
