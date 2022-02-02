import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

export default function Partners() {
  return (
    <div className={`bg-gradient py-5`}>
      <div className="div text-center text-light">
        <h3>Agencies</h3>
        <p>We are honoured to have these amazing agencies</p>
      </div>
      <Marquee gradient={false}>
        <div className={styles.partners}>
          <img src="/img/partners/Logo 01.png" alt="" />
          <img src="/img/partners/Logo 02.png" alt="" />
          <img src="/img/partners/Logo 03.png" alt="" />
          <img src="/img/partners/Logo 04.png" alt="" />
          <img src="/img/partners/Logo 05.png" alt="" />
          <img src="/img/partners/Logo 06.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
}
