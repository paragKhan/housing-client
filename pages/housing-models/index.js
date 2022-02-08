import Footer from "components/Footer";
import HousingModelCard from "components/HousingModelCard";
import Navbar from "components/Navbar";
import Pagination from "components/Paginations";
import React from "react";

export default function Subdivisions() {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-light">
        <div className="row bg-gradient py-5">
          <h3 className="text-center">Government Subdivisions and Lots</h3>
        </div>
        <div className="container">
          <div className="row mb-5" style={{ marginTop: "-30px" }}>
            <div className="col text-center bg-white card-shadow py-2">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
                <option>Location 4</option>
                <option>Location 5</option>
              </select>
            </div>
            <div className="col text-center bg-white card-shadow py-2">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Status</option>
                <option>Status 1</option>
                <option>Status 2</option>
                <option>Status 3</option>
                <option>Status 4</option>
                <option>Status 5</option>
              </select>
            </div>
            <div className="col text-center bg-white card-shadow py-2">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Type</option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                <option>Type 4</option>
                <option>Type 5</option>
                <option>Type 6</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
                <option>Type 7</option>
              </select>
            </div>
            <div className="col text-center card-shadow cursor-pointer btn-green py-3">
              Search
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
            <div className="col-12 col-md-6 col-xl-4 p-5 d-flex justify-content-center d-md-block">
              <HousingModelCard />
            </div>
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
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
}
