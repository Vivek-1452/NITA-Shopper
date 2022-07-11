import React, { Component } from "react";
import Slider from "react-slick";
import "./foodslider.css";
import image1 from "./images/food1.png";
import image2 from "./images/food2.png";
import image3 from "./images/food1.png";
import image4 from "./images/food2.png";
import image5 from "./images/food1.png";
import image6 from "./images/food2.png";
import image7 from "./images/food1.png";
import image8 from "./images/food2.png";
import fash from "./images/fashion.png";

export default class fashionslider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: false,
      // autoplaySpeed: 2000,
      // pauseOnHover: true,
    };

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
      <div
        className="pb-5"
        style={{ paddingLeft: "100px", fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="pb-3 text-start">
          <h4
            className="fw-bold display-6 mt-3 mb-1 ms-5 w-auto text-white"
            style={{
              display: "inline-block",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <img
              src={fash}
              alt="Fashion"
              style={{
                width: "25px",
                paddingBottom: "2px",
              }}
            />{" "}
            <span
              style={{
                letterSpacing: "0.05em",
                fontSize: "33px",
              }}
            >
              Fashion
            </span>
          </h4>
        </div>
        <Slider {...settings}>
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                // minWidth: "170px",
                // width: "70%",
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image1}
                  alt="Fash1"
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
                  <b>Fashion1</b>
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion1")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion1"
                        name="fashion1"
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
                        onClick={() => buttonClickb("fashion1")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select1" name="select1" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion1"
                      value="Add to cart"
                      name="fashion1"
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image2}
                  alt="Fash2"
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
                  <b>Fashion2</b>
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion2")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion2"
                        name="fashion2"
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
                        onClick={() => buttonClickb("fashion2")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select2" name="select2" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion2"
                      value="Add to cart"
                      name="fashion2"
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion3")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion3"
                        name="fashion3"
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
                        onClick={() => buttonClickb("fashion3")}
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
                  <div className="mt-2 mb-3">
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image4}
                  alt="Fash4"
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
                  <b>Fashion4</b>
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion4")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion4"
                        name="fashion4"
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
                        onClick={() => buttonClickb("fashion4")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select4" name="select4" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion4"
                      value="Add to cart"
                      name="fashion4"
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image5}
                  alt="Fash5"
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
                  <b>Fashion5</b>
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion5")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion5"
                        name="fashion5"
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
                        onClick={() => buttonClickb("fashion5")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select5" name="select5" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion5"
                      value="Add to cart"
                      name="fashion5"
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image6}
                  alt="Fash6"
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
                  <b>Fashion6</b>
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion6")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion6"
                        name="fashion6"
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
                        onClick={() => buttonClickb("fashion6")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select6" name="select6" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion6"
                      value="Add to cart"
                      name="fashion6"
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image7}
                  alt="Fash7"
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
                  <b>Fashion7</b>
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
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion7")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion7"
                        name="fashion7"
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
                        onClick={() => buttonClickb("fashion7")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select7" name="select7" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion7"
                      value="Add to cart"
                      name="fashion7"
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
          <div>
            <div
              className="card mx-auto my-2"
              style={{
                display: "inline-block",
                width: "auto",
                height: "100%",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 5px #999",
              }}
            >
              <center>
                <img
                  className="bg-dark"
                  src={image8}
                  alt="Fash8"
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
                  <b>Fashion8</b>
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
                <form action="">
                  <div
                    className="row float-start mb-3"
                    style={{
                      width: "85px",
                      height: "30px",
                      border: "1px solid rgba(0, 102, 249, 1)",
                      borderRadius: "2px",
                      marginLeft: "2px",
                      marginTop: "9px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="col-4"
                      style={{
                        borderRight: "1px solid rgba(0, 102, 249, 1)",
                      }}
                    >
                      <button
                        className="btn btnl"
                        onClick={() => buttonClicka("fashion8")}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-4">
                      <input
                        id="fashion8"
                        name="fashion8"
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
                        onClick={() => buttonClickb("fashion8")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="float-end mt-2">
                    <select id="select8" name="select8" className="select">
                      <option value="xxl">xxl</option>
                      <option value="xl">xl</option>
                      <option value="l">l</option>
                      <option value="m">m</option>
                      <option value="s">s</option>
                    </select>
                  </div>
                  <div className="mt-2 mb-3">
                    <input
                      type="button"
                      id="fashion8"
                      value="Add to cart"
                      name="fashion8"
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
        </Slider>
      </div>
    );
  }
}
