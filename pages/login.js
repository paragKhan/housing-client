import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-gradient py-5">
        <div className="row justify-content-center py-5 my-5 px-3">
          <div
            className="card card-shadow px-2 py-3"
            style={{ width: 500, height: "content-height" }}
          >
            <div className="card-body py-5">
              <h2 className="text-center color-dark fw-bold mb-5">Login</h2>
              <form>
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Email address"
                  type="text"
                />
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Password"
                  type="text"
                />
                <div className="d-flex mb-3">
                  <input className="me-3" type="checkbox" />
                  <small className="color-green">Remember me</small>
                </div>

                <div className="text-center">
                  <input
                    className="btn bg-green text-white px-4"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
              <p className="mt-3 text-center color-dark">
                <span className="me-2">Don&apos;t have an account?</span>
                <Link href="/signup">
                  <a>
                    <u>Signup</u>
                  </a>
                </Link>
                <br />
                <span>Or you can </span>
                <Link href="/">
                  <a>
                    <u className="text-danger">reset your password</u>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
