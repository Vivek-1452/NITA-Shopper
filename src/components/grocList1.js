import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navnew from "./Navnew";
import img1 from "./images/grocIcon.png";
import "./grocList1.css";
import image2 from "./images/food2.png";

const GrocList1 = (props) => {
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
                Groceries
              </h1>
              <div className="d-lg-block d-md-block d-none pt-0">
                <form>
                  <div
                    className={display1 ? "input-group d-none" : "input-group"}
                  >
                    <input
                      type="search"
                      placeholder="Search groceries"
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
            <h6 className="linksAcc">General</h6>
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
            <h6 className="linksAcc">Leafy</h6>
          </Link>
        </div>

        <div className="container">
          <div className="row">
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery1</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery1")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery1"
                          name="Grocery1"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery1")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery2</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery2")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery2"
                          name="Grocery2"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery2")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery3</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery3")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery3"
                          name="Grocery3"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery3")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery4</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery4")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery4"
                          name="Grocery4"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery4")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery5</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery5")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery5"
                          name="Grocery5"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery5")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery6</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery6")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery6"
                          name="Grocery6"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery6")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery7</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery7")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery7"
                          name="Grocery7"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery7")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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
                <div className="card-body pb-0">
                  <h5 className="card-title text-start">
                    <b>Grocery8</b>
                  </h5>
                  <div className="row float-start mb-3 rowGroc">
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1a"
                        className="btn btnl"
                        onClick={() => buttonClicka("Grocery8")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <form>
                        <input
                          id="Grocery8"
                          name="Grocery8"
                          type="number"
                          placeholder="0"
                          value="0"
                          readOnly
                          style={{
                            width: "25",
                            textAlign: "center",
                            paddingTop: "2px",
                          }}
                        />
                      </form>
                    </div>
                    <div
                      className="col-4"
                      style={{
                        borderLeft: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        id="btn1b"
                        className="btn btnr"
                        onClick={() => buttonClickb("Grocery8")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-3">
                    <h5
                      style={{
                        display: "inline-block",
                        width: "auto",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
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

export default GrocList1;
