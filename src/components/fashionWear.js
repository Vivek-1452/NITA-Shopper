import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navnew from "./Navnew";
import img1 from "./images/fashionIcon.png";
import image3 from "./images/food1.png";
import "./fashionWear.css";

const FashionWear = (props) => {
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
            id="profile"
            to=""
            style={{ textDecoration: "none", paddingBottom: "12px" }}
          >
            <h6 className="linksAcc">Daily Wear</h6>
          </Link>
          <Link
            id="orders"
            to=""
            style={{ textDecoration: "none", paddingBottom: "12px" }}
          >
            <h6 className="linksAcc">Winter Wear</h6>
          </Link>
          <Link
            id="favourites"
            to=""
            style={{ textDecoration: "none", paddingBottom: "12px" }}
          >
            <h6 className="linksAcc">Party Wear</h6>
          </Link>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear1")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear1"
                          name="wear1"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear1")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear2")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear2"
                          name="wear2"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear2")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear3")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear3"
                          name="wear3"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear3")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear4")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear4"
                          name="wear4"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear4")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear5")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear5"
                          name="wear5"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear5")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear6")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear6"
                          name="wear6"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear6")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear7")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear7"
                          name="wear7"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear7")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear8")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear8"
                          name="wear8"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear8")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear9")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear9"
                          name="wear9"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear9")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear10")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear10"
                          name="wear10"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear10")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear11")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear11"
                          name="wear11"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear11")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-5">
              <div className="card mx-auto my-2 cardWear">
                <center>
                  <img
                    className="bg-dark"
                    src={image3}
                    alt="Fash3"
                    width="200"
                    height="200"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  />
                </center>
                <div className="card-body pb-0">
                  <h6
                    className="card-title text-start"
                    style={{ fontSize: "18px" }}
                  >
                    <b>Fashion3</b>
                  </h6>
                  <div className="mt-2 text-start">
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹150.00
                    </h5>
                  </div>
                  <form>
                    <div className="row float-start mb-3 rowWear">
                      <div
                        className="col-4"
                        style={{
                          borderRight: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnl"
                          onClick={() => buttonClicka("wear12")}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-4">
                        <input
                          id="wear12"
                          name="wear12"
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
                      </div>
                      <div
                        className="col-4"
                        style={{
                          borderLeft: "1px solid rgba(0, 102, 249, 1)",
                        }}
                      >
                        <button
                          className="btn btnr"
                          onClick={() => buttonClickb("wear12")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="float-end mt-2">
                      <select id="select3" name="select3" className="select">
                        <option value="xxl">xxl</option>
                        <option value="xl">xl</option>
                        <option value="l">l</option>
                        <option value="m">m</option>
                        <option value="s">s</option>
                      </select>
                    </div>
                    <div className="mt-2">
                      <input
                        type="button"
                        id="fashion3"
                        value="Add to cart"
                        name="fashion3"
                        className="btnBook"
                        style={{
                          fontSize: "15px",
                          padding: "0px 20px !important",
                          width: "100%",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionWear;
