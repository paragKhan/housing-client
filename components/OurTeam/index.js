import TeamCard from "components/TeamCard";
import React from "react";

export default function OurTeam() {
  return (
    <div className="bg-light p-4">
      <div className="container">
        <div className="text-center">
          <h3>Meet With Our Team</h3>
          <p>Get in touch with our team</p>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 d-flex justify-content-center justify-content-lg-start">
            <TeamCard />
          </div>
          <div className="col col-lg-4 d-flex justify-content-center my-5 my-lg-0">
            <TeamCard />
          </div>
          <div className="col col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
}
