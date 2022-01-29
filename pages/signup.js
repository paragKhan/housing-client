import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="d-none d-lg-block col-lg-6 p-0">
          <div className="card h-100 w-100 text-white">
            <img
              src="https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg"
              className="h-100 img-fluid"
              alt="..."
            />
            <div className="card-img-overlay d-flex align-items-center bg-overlay p-0">
              <div className="p-5 m-5">
                <h3>WELCOME</h3>
                <p>
                  Welcome to the ministry of the Environment and Housing’s home
                  ownership application database. On this website you are able
                  to apply for home ownership, view our housing models and floor
                  plans and confirm the status of your application.{" "}
                </p>
                <p>
                  We hope that your experience here is a pleasent and fruitful
                  one.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center bg-light p-5">
          <div
            className="card card-shadow px-2 py-3"
            style={{ width: 500, height: "fit-content" }}
          >
            <div className="card-body">
              <h2 className="text-center color-dark fw-bold">Sign Up</h2>
              <form>
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Last Name"
                  type="text"
                />
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Email Address"
                  type="text"
                />
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Phone Number"
                  type="text"
                />
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Password"
                  type="text"
                />
                <input
                  className="form-control mb-3 bg-light border-0 color-dark"
                  placeholder="Confirm Password"
                  type="text"
                />
                <div className="d-flex mb-3">
                  <input className="me-3" type="checkbox" />
                  <span>Accept Terms and Conditions</span>
                </div>

                <div className="text-center">
                  <input
                    className="btn bg-green text-white px-4"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
