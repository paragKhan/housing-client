import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function TeamCard({
  name,
  designation,
  photo,
  linkedin,
  email,
  phone,
}) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={photo} alt="" />
      <div className={styles.content}>
        <h6>{name}</h6>
        <p>{designation}</p>
        <span>
          <Link href="#">
            <a>
              <i className="fab fa-linkedin fs-3 m-2" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <i className="fas fa-envelope fs-3 m-2" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <i className="fas fa-phone-alt fs-3 m-2" />
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
}
