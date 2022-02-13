import TeamCard from "components/TeamCard";
import React from "react";

export default function OurTeam() {
  const data = [
    {
      name: "Ms. Antoinette Thompson",
      designation: "Permanent Secretary",
      photo: "/img/team/common.png",
      email: "antoinettethompson@bahamas.gov.bs",
      phone: "",
    },
    {
      name: "Gaynell Rolle, MBA",
      designation: "Under Secretary",
      photo: "/img/team/person2.png",
      email: "gaynellrolle@bahamas.gov.bs",
      phone: "",
    },
    {
      name: "Mr. Thomas Ferguson",
      designation: "Acting Director of Housing",
      photo: "/img/team/common.png",
      email: "orallafleur@bahamas.gov.bs",
      phone: "",
    },
  ];

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h3>Meet the Executive Team</h3>
          <p>Get in touch with our team</p>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 d-flex justify-content-center justify-content-lg-start mb-5 mb-lg-0">
            <TeamCard
              name={data[0].name}
              designation={data[0].designation}
              photo={data[0].photo}
              email={data[0].email}
              phone={data[0].phone}
            />
          </div>
          <div className="col col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">
            <TeamCard
              name={data[1].name}
              designation={data[1].designation}
              photo={data[1].photo}
              email={data[1].email}
              phone={data[1].phone}
            />
          </div>
          <div className="col col-lg-4 d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-0">
            <TeamCard
              name={data[2].name}
              designation={data[2].designation}
              photo={data[2].photo}
              email={data[2].email}
              phone={data[2].phone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
