import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

export default function Partners() {
  return (
    <div className="py-5" style={{ background: "#d7f5ed" }}>
      <div className="div text-center text-dark">
        <h3>Agencies</h3>
        <p>We are honoured to have these amazing agencies</p>
      </div>
      <Marquee gradient={false}>
        <div className={styles.partners}>
          <img className="pe-none" src="/img/partners/Logo 01.png" alt="" />
          <img className="pe-none" src="/img/partners/Logo 02.png" alt="" />
          <img className="pe-none" src="/img/partners/Logo 03.png" alt="" />
          <img className="pe-none" src="/img/partners/Logo 04.png" alt="" />
          <img className="pe-none" src="/img/partners/Logo 05.png" alt="" />
          <img className="pe-none" src="/img/partners/Logo 06.png" alt="" />
          <img className="pe-none" src="/img/partners/Logo 07.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
}
