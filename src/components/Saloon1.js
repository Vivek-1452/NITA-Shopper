import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Saloon1.css";
import img1 from "./images/saloon11.png";

function Saloon1() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(24, 24, 24, 1)",
        paddingLeft: "100px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(24, 24, 24, 1)",
          paddingTop: "20px",
          paddingBottom: "30px",
        }}
      >
        <Carousel responsive={responsive}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNSBFzybz5X5yeM30Jxo0d4RQLpnrkGzxET0xtxGEKq5yeQK0pmhFon9mzeFYJUbrfJk&usqp=CAU"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNSBFzybz5X5yeM30Jxo0d4RQLpnrkGzxET0xtxGEKq5yeQK0pmhFon9mzeFYJUbrfJk&usqp=CAU"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU"
              alt="img"
            />
          </div>
        </Carousel>
      </div>

      <div
        className="mt-4"
        style={{
          borderBottom: "1px solid whitesmoke",
          color: "white",
          width: "100%",
        }}
      >
        <Link
          id="profile"
          to="/YourAccount"
          prop1="profile"
          style={{ textDecoration: "none", paddingBottom: "12px" }}
          // onClick={() => clicking("profile")}
        >
          <h6 className="linksAcc">Profile</h6>
        </Link>
        <Link
          id="orders"
          to="/YourOrders"
          prop1="orders"
          style={{ textDecoration: "none", paddingBottom: "12px" }}
          // onClick={() => clicking("orders")}
        >
          <h6 className="linksAcc">Orders</h6>
        </Link>
      </div>

      <div className="container-fluid row text-center">
        <form>
          <fieldset>
            <div className="col-lg-6 col-md-6">
              <div
                className="row mt-4"
                style={{
                  height: "68px",
                  width: "380px",
                  border: "1px solid white",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "30px",
                  marginLeft: "0px",
                }}
              >
                <div
                  className="col-6 text-start"
                  // style={{ display: "inline-block", width: "auto" }}
                >
                  <input
                    type="radio"
                    name="action"
                    id="haircut"
                    value="haircut"
                  />
                  <label for="track">Haircut</label>
                </div>
                <div
                  className="col-6 text-end"
                  // style={{ display: "inline-block", width: "auto" }}
                >
                  <h5>₹100.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="row mt-4"
                style={{
                  height: "68px",
                  width: "380px",
                  border: "1px solid white",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "30px",
                  marginLeft: "0px",
                }}
              >
                <div
                  className="col-6 text-start"
                  // style={{ display: "inline-block", width: "auto" }}
                >
                  <input
                    type="radio"
                    name="action"
                    id="haircut"
                    value="haircut"
                  />
                  <label for="track">Haircut</label>
                </div>
                <div
                  className="col-6 text-end"
                  // style={{ display: "inline-block", width: "auto" }}
                >
                  <h5>₹100.00</h5>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Saloon1;
