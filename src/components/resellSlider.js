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
import resell from "./images/resell.png";

export default class resellSlider extends Component {
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
              src={resell}
              alt="Resell"
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
              Resell
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
                  alt="Resell1"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Casio Calculator</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell1"
                      value="Add to cart"
                      name="resell1"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell2"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell2</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell2"
                      value="Add to cart"
                      name="resell2"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell3"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell3</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell3"
                      value="Add to cart"
                      name="resell3"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell4"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell4</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell4"
                      value="Add to cart"
                      name="resell4"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell5"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell5</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell5"
                      value="Add to cart"
                      name="resell5"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell6"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell6</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell6"
                      value="Add to cart"
                      name="resell6"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell7"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell7</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell7"
                      value="Add to cart"
                      name="resell7"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
                  alt="Resell8"
                  width="200"
                  height="200"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h6 className="card-title text-start">
                  <b>Resell8</b>
                </h6>
                <div className="float-start mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="resell8"
                      value="Add to cart"
                      name="resell8"
                      className="btnResell"
                    />
                  </form>
                </div>
                <div className="float-end mt-2">
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
  }
}
