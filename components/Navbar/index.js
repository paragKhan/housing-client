import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  const navActive = (path) => {
    return router.pathname == path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white container">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand fw-bold">
            <img className="logo" src="/img/logo.png" alt="" />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${navActive("/")}`}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${navActive("/subdivisions")}`}>
                  Subdivisions
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${navActive("/housing-models")}`}>
                  Housing Models
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${navActive("/contact")}`}>Contact</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Housing Act
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Housing Regulations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Agencies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rent Of own
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FAQs
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <Link href="/signup">
            <a className="btn bg-gradient-hover ms-auto">Login/Signup</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
