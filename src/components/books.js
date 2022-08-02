import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navnew from "./Navnew";
import img1 from "./images/foodIcon.png";
import "./books.css";
import image2 from "./images/food2.png";

const Books = (props) => {
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

  const buttonClicka = (id) => {
    var i = document.getElementById(id).value;
    document.getElementById(id).value = --i;

    if (i < 1) {
      document.getElementById(id).value = 0;
    }
  };

  const buttonClickb = (id) => {
    var i = document.getElementById(id).value;
    document.getElementById(id).value = ++i;
  };

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
                Books
              </h1>
              <div className="d-lg-block d-md-block d-none pt-0">
                <form>
                  <div
                    className={display1 ? "input-group d-none" : "input-group"}
                  >
                    <input
                      type="search"
                      placeholder="Search Books"
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

        <div
          className="mt-4"
          style={{
            borderBottom: "1px solid whitesmoke",
            color: "white",
            width: "100%",
            textAlign: "start",
          }}
        >
          <Link to="" style={{ textDecoration: "none", paddingBottom: "12px" }}>
            <h6 className="linksBook">Mathematics</h6>
          </Link>
          <Link to="" style={{ textDecoration: "none", paddingBottom: "12px" }}>
            <h6 className="linksBook">Physics</h6>
          </Link>
          <Link to="" style={{ textDecoration: "none", paddingBottom: "12px" }}>
            <h6 className="linksBook">Electrical</h6>
          </Link>
          <Link to="" style={{ textDecoration: "none", paddingBottom: "12px" }}>
            <h6 className="linksBook">Chemistry</h6>
          </Link>
        </div>

        <div className="container">
          <div className="row">
            <h1
              className="text-start ms-5 mt-5 fw-bold"
              style={{
                color: "white",
                width: display ? "auto" : "",
              }}
            >
              Mathematics
            </h1>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-2 my-5">
              <div className="card mx-auto mt-2 cardGroc">
                <center>
                  <img
                    className="bg-dark"
                    src={image2}
                    alt="Groc2"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0 mt-md-1">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Engineering Mathematics</b>
                  </h6>
                  <div className="mt-3 mb-2 btnBook">
                    <a
                      href="."
                      style={{
                        fontSize: "14px",
                        padding: "0px 20px !important",
                        width: "100%",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
