import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navnew from "./Navnew";
import img1 from "./images/hcIcon.png";
import image3 from "./images/saloon1.png";
import loc from "./images/locationIcon.png";

const Hclist = (props) => {
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
                Hire Charge
              </h1>
              <div className="d-lg-block d-md-block d-none pt-0">
                <form>
                  <div
                    className={display1 ? "input-group d-none" : "input-group"}
                  >
                    <input
                      type="search"
                      placeholder="Search Hire Charge"
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
          <Link
            to=""
            style={{
              textDecoration: "none",
              paddingBottom: "5px",
              display: "inline-block",
              width: "auto",
            }}
          >
            <h6 className="linksAcc">Vehicles</h6>
          </Link>
          <Link
            to=""
            style={{
              textDecoration: "none",
              paddingBottom: "5px",
              display: "inline-block",
              width: "auto",
            }}
          >
            <h6 className="linksAcc">Electronics</h6>
          </Link>
          <Link
            to=""
            style={{
              textDecoration: "none",
              paddingBottom: "5px",
              display: "inline-block",
              width: "auto",
            }}
          >
            <h6 className="linksAcc">Stationary</h6>
          </Link>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card mx-auto my-2 cardSaloon">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="saloon1"
                    width="280"
                    height="150"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>RE Classic 350</b>
                  </h5>
                  <div className="float-start my-2">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹1200.00
                    </h5>
                  </div>
                  <Link to="/Vehicle1">
                    <div className="float-end mt-2 mb-3">
                      <form>
                        <input
                          type="button"
                          id="saloon1"
                          value="Book Now"
                          name="saloon1"
                          className="btnBook"
                          style={{
                            fontSize: "15px",
                            padding: "0px 20px !important",
                          }}
                        />
                      </form>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card mx-auto my-2 cardSaloon">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="saloon2"
                    width="280"
                    height="150"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Saloon2</b>
                  </h5>
                  <div className="float-start my-2"></div>
                  <div className="float-start my-2">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹1200.00
                    </h5>
                  </div>
                  <div className="float-end mt-2 mb-3">
                    <form>
                      <input
                        type="button"
                        id="saloon2"
                        value="Book Now"
                        name="saloon2"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card mx-auto my-2 cardSaloon">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="saloon3"
                    width="280"
                    height="150"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Saloon3</b>
                  </h5>
                  <div className="float-start my-2"></div>
                  <div className="float-start my-2">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹1200.00
                    </h5>
                  </div>
                  <div className="float-end mt-2 mb-3">
                    <form>
                      <input
                        type="button"
                        id="saloon3"
                        value="Book Now"
                        name="saloon3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card mx-auto my-2 cardSaloon">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="saloon4"
                    width="280"
                    height="150"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Saloon4</b>
                  </h5>
                  <div className="float-start my-2"></div>
                  <div className="float-start my-2">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹1200.00
                    </h5>
                  </div>
                  <div className="float-end mt-2 mb-3">
                    <form>
                      <input
                        type="button"
                        id="saloon4"
                        value="Book Now"
                        name="saloon4"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card mx-auto my-2 cardSaloon">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="saloon5"
                    width="280"
                    height="150"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Saloon5</b>
                  </h5>
                  <div className="float-start my-2"></div>
                  <div className="float-start my-2">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹1200.00
                    </h5>
                  </div>
                  <div className="float-end mt-2 mb-3">
                    <form>
                      <input
                        type="button"
                        id="saloon5"
                        value="Book Now"
                        name="saloon5"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card mx-auto my-2 cardSaloon">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="saloon6"
                    width="280"
                    height="150"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Saloon6</b>
                  </h5>
                  <div className="float-start my-2"></div>
                  <div className="float-start my-2">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹1200.00
                    </h5>
                  </div>
                  <div className="float-end mt-2 mb-3">
                    <form>
                      <input
                        type="button"
                        id="saloon6"
                        value="Book Now"
                        name="saloon6"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                        }}
                      />
                    </form>
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

export default Hclist;
