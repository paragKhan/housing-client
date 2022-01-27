import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.title}>Brand Name</div>
      <a onClick={() => setToggle(!toggle)} href="#" className={styles.toggle}>
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </a>
      <div className={`${styles.links} ${toggle ? styles.active : ""}`}>
        <ul>
          <li>
            <Link href="/">
              <a className={styles.active}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Message Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
            <ul className={styles.dropdown}>
              <li className="mt-3">
                <Link href="/">
                  <a>Dropdown 1</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Dropdown 1</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Dropdown 1</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
