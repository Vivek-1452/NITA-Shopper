import React, { Component } from "react";
import Slider from "react-slick";
import "./foodslider.css";
import image1 from "./images/saloon1.png";
import image2 from "./images/saloon1.png";
import image3 from "./images/saloon1.png";
import image4 from "./images/saloon1.png";
import image5 from "./images/saloon1.png";
import image6 from "./images/saloon1.png";
import image7 from "./images/saloon1.png";
import image8 from "./images/saloon1.png";
import hire from "./images/hire.png";

export default class hirecharge extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
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
              src={hire}
              alt="Hire Charge"
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
              Hire Charge
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
                  alt="saloon1"
                  width="280"
                  height="150"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h5 className="card-title text-start">
                  <b>Saloon1</b>
                </h5>
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
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
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
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
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
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
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
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
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
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
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
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
                  alt="saloon7"
                  width="280"
                  height="150"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h5 className="card-title text-start">
                  <b>Saloon7</b>
                </h5>
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="saloon7"
                      value="Book Now"
                      name="saloon7"
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
                  alt="saloon8"
                  width="280"
                  height="150"
                  style={{ borderRadius: "10px 10px 0 0" }}
                />
              </center>
              <div className="card-body pb-0">
                <h5 className="card-title text-start">
                  <b>Saloon8</b>
                </h5>
                <div className="float-start my-2">
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹150.00
                  </h5>
                </div>
                <div className="float-end mt-1 mb-3">
                  <form>
                    <input
                      type="button"
                      id="saloon8"
                      value="Book Now"
                      name="saloon8"
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
        </Slider>
      </div>
    );
  }
}
