import TeamCard from "components/TeamCard";
import React from "react";

export default function OurTeam() {
  const data = [
    {
      name: "Ms. Antoinette Thompson",
      designation: "Permanent Secretary",
      photo: "/img/team/person1.png",
      linkedin: "",
      email: "",
      phone: "",
    },
    {
      name: "Gaynell Rolle MBA, AMA, CRMA, CTEP, CIA",
      designation: "Under Secretary",
      photo: "/img/team/person2.png",
      linkedin: "",
      email: "",
      phone: "",
    },
    {
      name: "Mr. Thomas Ferguson",
      designation: "Acting Director of Housing",
      photo: "/img/team/person1.png",
      linkedin: "",
      email: "",
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
          {data &&
            data.map((item, i) => (
              <div
                key={i}
                className="col col-lg-4 d-flex justify-content-center justify-content-lg-start mb-5 mb-lg-0"
              >
                <TeamCard
                  name={item.name}
                  designation={item.designation}
                  photo={item.photo}
                  linkedin={item.linkedin}
                  emai={item.email}
                  phone={item.phone}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
