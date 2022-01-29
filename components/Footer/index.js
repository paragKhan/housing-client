import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Image height={80} width={318} src="/img/logo.png" alt="" />
            <div className="my-2">
              <i className="fas fa-location-arrow color-dark me-2" />
              <small className="color-dark">
                {
                  "Charlotte House, Charlotte Street, P.O.Box N275 Nassau, N.P.,The Bahamas"
                }
              </small>
            </div>
            <div className="my-2">
              <i className="fas fa-phone-alt color-dark me-2" />
              <small className="color-dark">{"302-5800, 302-5822"}</small>
            </div>
            <div>
              <i className="fas fa-envelope color-dark me-2" />
              <small className="color-dark">{"info@dohbahamas.com"}</small>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-3 mt-lg-3">
            <h4 className="color-dark">Quick Links</h4>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>Subdivisions</span>
                  </a>
                </Link>
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>About Us</span>
                  </a>
                </Link>
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>FAQs</span>
                  </a>
                </Link>
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>Contact Us</span>
                  </a>
                </Link>
              </div>
              <div className="d-flex flex-column">
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>Privacy Policy</span>
                  </a>
                </Link>
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>Terms & Conditions</span>
                  </a>
                </Link>
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>Housing Act</span>
                  </a>
                </Link>
                <Link className="color-dark" href="#">
                  <a>
                    <i className="fas fa-caret-right color-green me-2 fs-6" />
                    <span>Housing Regulations</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-3">
            <h4>Keep Updated</h4>
            <form>
              <input
                className="form-control bg-light border-0"
                value="Your Email Address"
              />
              <input
                className="btn bg-green text-light mt-3"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center text-light py-3">
        &copy; {new Date().toDateString().split(" ").slice(-1)[0]}. All rights
        reserved.
      </div>
    </div>
  );
}
