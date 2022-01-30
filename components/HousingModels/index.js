import HousingModelCard from "components/HousingModelCard";
import Pagination from "components/Paginations";
import React from "react";

export default function HousingModels() {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <div className="text-center">
          <h3>Housing Models</h3>
          <p>Check out some of our latest properties.</p>
        </div>
        <div className="row pt-3">
          <div className="col col-lg-4 d-flex justify-content-center justify-content-lg-start">
            <HousingModelCard />
          </div>
          <div className="col col-lg-4 d-flex justify-content-center my-3 my-lg-0">
            <HousingModelCard />
          </div>
          <div className="col col-lg-4 d-flex justify-content-center justify-content-lg-end">
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
