import HousingModelCard from "components/HousingModelCard";
import Pagination from "components/Paginations";
import React from "react";

export default function HousingModels() {
  return (
    <div className="py-5" style={{ background: "#d7f5ed" }}>
      <div className="container">
        <div className="text-center">
          <h3>Housing Models</h3>
          <p>Check out some of our latest properties.</p>
        </div>
        <div className="row  pt-3">
          <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
            <HousingModelCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
            <HousingModelCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
            <HousingModelCard />
          </div>
        </div>
        <div className="row">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
