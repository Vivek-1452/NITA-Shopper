import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navnew from "./Navnew";
import img1 from "./images/fashionIcon.png";
import hire from "./images/hire.png";
import "./fashion.css";

const Fashion = (props) => {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  const [display1, setdisplay1] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setdisplay1(true);
    }
  }, [display1]);

  return (
    <>
      <Navnew />
      <div
        style={{
          backgroundColor: "rgba(24, 24, 24, 1)",
          paddingLeft: display ? "0" : "100px",
          paddingTop: "20px",
          paddingBottom: "100px",
        }}
      >
        <div
          className="row pt-3 mx-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0068f9 0%, #181818 100%)",
          }}
        >
          <div className="row">
            <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
              <h1
                className="ps-5 mt-lg-2"
                style={{
                  textAlign: "left",
                  marginBottom: "50px",
                  color: "white",
                }}
              >
                Fashion
              </h1>
              <div className="d-lg-block d-md-block d-none pt-0">
                <form>
                  <div
                    className={display1 ? "input-group d-none" : "input-group"}
                  >
                    <input
                      type="search"
                      placeholder="Search fashion"
                      style={{
                        borderRadius: "50px 0 0 50px",
                        padding: "0 20px",
                        width: "350px",
                        margin: "0 0 0 40%",
                      }}
                    ></input>
                    <div
                      className="input-group-append px-3 py-2"
                      style={{
                        backgroundColor: "rgba(0, 102, 249, 1)",
                        borderRadius: "0 50px 50px 0",
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-8 pe-0">
              <img
                src={img1}
                alt=""
                style={{ height: "100%", width: "60%", float: "right" }}
              />
            </div>
          </div>
        </div>

        {/* Body */}

        <div className="container" style={{ paddingTop: "50px" }}>
          <div className="row" style={{ color: "white", fontWeight: "bold" }}>
            <div className="col-lg-4 col-md-6 my-5">
              <Link className="LinkFashion" to="/Wear">
                <div className="boxes">
                  <img
                    src={hire}
                    alt="Hire"
                    style={{ width: "50px", padding: "50px 0 20px 0" }}
                  />
                  <p style={{ fontSize: "18px" }}>Wear</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="boxes">
                <img
                  src={hire}
                  alt="Hire"
                  style={{ width: "50px", padding: "50px 0 20px 0" }}
                />
                <p style={{ fontSize: "18px" }}>Hoodies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fashion;
