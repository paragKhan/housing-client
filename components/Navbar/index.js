import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          LOGO
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Subdivisions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Housing Models
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Contact
              </a>
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
          <a href="#" className="btn bg-gradient ms-auto">
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
}
