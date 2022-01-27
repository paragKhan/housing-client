import HousingIslandCard from "components/HousingIslandCard";
import React from "react";

export default function HousingIsland() {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <div className="text-center">
          <h3>Housing on the Islands</h3>
          <p>Check out some of our latest properties on these Islands</p>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center mb-3">
            <HousingIslandCard title="Grand Bahama" />
          </div>
          <div className="col d-flex justify-content-center mb-3">
            <HousingIslandCard title="Abaco" />
          </div>
          <div className="col d-flex justify-content-center mb-3">
            <HousingIslandCard title="Eleuthera" />
          </div>
          <div className="col d-flex justify-content-center">
            <HousingIslandCard title="New Providence" />
          </div>
        </div>
      </div>
    </div>
  );
}
