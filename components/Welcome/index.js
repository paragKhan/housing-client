import React from "react";

export default function Welcome() {
  return (
    <div className="bg-white" style={{ padding: 50 }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <img
              src="/img/person.png"
              alt="..."
              className="w-100 rounded-circle border border-5 border-green"
              style={{ maxWidth: 300 }}
            />
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <div className="text-center text-md-start">
              <p className="fs-5">
                Welcome to the Ministry of the Environment and Housing&apos;s
                home ownership application database. On this website you are
                able to apply for home ownership, view our housing models and
                floor plans and confirm the status of your application. We hope
                that your experience here is a pleasant and fruitful one.
              </p>
              <strong className="fs-5">
                Hon. JoBeth L. Coleby-Davis <br />
                Minister of Transport and Housing
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
