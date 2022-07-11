import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
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
import food from "./images/food.png";

const Foodslider = (props) => {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
  };

  const buttonClicka = (id1) => {
    var i = document.getElementById(id1).value;
    document.getElementById(id1).value = --i;

    if (i < 1) {
      document.getElementById(id1).value = 0;
    }
  };

  const buttonClickb = (id2) => {
    var j = document.getElementById(id2).value;
    document.getElementById(id2).value = ++j;
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
            src={food}
            alt="Food"
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
            Food
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
                alt="Food1"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Egg Maggie</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    id="btn1a"
                    className="btn btnl"
                    onClick={() => buttonClicka("eggmaggie")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="eggmaggie"
                      name="eggmaggie"
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
                    onClick={() => buttonClickb("eggmaggie")}
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
                alt="Food2"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Chicken Biryani</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    id="btn1a"
                    className="btn btnl"
                    onClick={() => buttonClicka("chicbir")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="chicbir"
                      name="chicbir"
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
                    onClick={() => buttonClickb("chicbir")}
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
                alt="Food3"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Food3</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    onClick={() => buttonClicka("food3")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="food3"
                      name="food3"
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
                    className="btn btnr"
                    onClick={() => buttonClickb("food3")}
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
                alt="Food4"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Food4</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    onClick={() => buttonClicka("food4")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="food4"
                      name="food4"
                      type="number"
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
                    className="btn btnr"
                    onClick={() => buttonClickb("food4")}
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
                alt="Food5"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Food5</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    onClick={() => buttonClicka("food5")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="food5"
                      name="food5"
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
                    className="btn btnr"
                    onClick={() => buttonClickb("food5")}
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
                alt="Food6"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Food6</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    onClick={() => buttonClicka("food6")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="food6"
                      name="food6"
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
                    className="btn btnr"
                    onClick={() => buttonClickb("food6")}
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
                alt="Food7"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Food7</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    onClick={() => buttonClicka("food7")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="food7"
                      name="food7"
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
                    className="btn btnr"
                    onClick={() => buttonClickb("food7")}
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
                alt="Food8"
                width="200"
                height="200"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            </center>
            <div className="card-body pb-0">
              <h5 className="card-title text-start">
                <b>Food8</b>
              </h5>
              <div
                className="row float-start mb-3"
                style={{
                  width: "85px",
                  height: "30px",
                  border: "1px solid rgba(0, 102, 249, 1)",
                  borderRadius: "2px",
                  marginLeft: "2px",
                  marginTop: "11px",
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
                    onClick={() => buttonClicka("food8")}
                  >
                    -
                  </button>
                </div>
                <div className="col-4">
                  <form>
                    <input
                      id="food8"
                      name="food8"
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
                    className="btn btnr"
                    onClick={() => buttonClickb("food8")}
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
      </Slider>
    </div>
  );
};

export default Foodslider;
