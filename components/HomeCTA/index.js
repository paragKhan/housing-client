import React from "react";

export default function HomeCTA() {
  return (
    <div className="bg-gradient p-5">
      <div className="container">
        <h5 className="text-start text-md-center">
          If you are a first time applicant and interested in owning a home,
          please sign up by clicking on the link below
        </h5>

        <div className="mt-5 text-center">
          <a href="#" className="btn btn-light px-4 me-3">
            Sign Up
          </a>
          <a href="#" className="btn btn-outline-light px-4">
            Browse
          </a>
        </div>
      </div>
    </div>
  );
}
