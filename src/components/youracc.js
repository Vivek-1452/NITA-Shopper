import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navnew from "./Navnew";
import img1 from "./images/youraccIcon.png";
import "./youracc.css";

const Youracc = (props) => {
  // useEffect(() => {
  //   if (props.prop1 == "profile") {
  //     document.getElementById("profile").style.borderBottom =
  //       "3px solid #0068f9";
  //   } else if (props.prop1 == "orders") {
  //     document.getElementById("orders").style.borderBottom =
  //       "3px solid #0068f9";
  //   } else if (props.prop1 == "favourites") {
  //     document.getElementById("favourites").style.borderBottom =
  //       "3px solid #0068f9";
  //   } else if (props.prop1 == "payments") {
  //     document.getElementById("payments").style.borderBottom =
  //       "3px solid #0068f9";
  //   } else if (props.prop1 == "addresses") {
  //     document.getElementById("addresses").style.borderBottom =
  //       "3px solid #0068f9";
  //   } else if (props.prop1 == "settings") {
  //     document.getElementById("settings").style.borderBottom =
  //       "3px solid #0068f9";
  //   }
  // }, []);

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

  // const clicking = (id) => {
  //   if (id == "profile") {
  //     document.location.href = "/YourAccount";
  //   } else if (id == "orders") {
  //     document.location.href = "/YourOrders";
  //   } else if (id == "favourites") {
  //     document.location.href = "/YourFavs";
  //   } else if (id == "payments") {
  //     document.location.href = "/YourPayments";
  //   } else if (id == "addresses") {
  //     document.location.href = "/YourAddresses";
  //   } else if (id == "settings") {
  //     document.location.href = "/Settings";
  //   }
  // };

  return (
    <>
      <Navnew />
      <div
        style={{
          backgroundColor: "rgba(24, 24, 24, 1)",
          paddingLeft: "100px",
          paddingTop: "20px",
          paddingBottom: "200px",
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
                Your Account
              </h1>
              <div className="d-lg-block d-md-block d-none pt-0">
                <form>
                  <div
                    className={display1 ? "input-group d-none" : "input-group"}
                  >
                    <input
                      type="search"
                      placeholder="Search your account"
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
                style={{ height: "90%", width: "60%", float: "right" }}
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
          <Link
            id="favourites"
            to="/YourFavs"
            prop1="favourites"
            style={{ textDecoration: "none", paddingBottom: "12px" }}
            // onClick={() => clicking("favourites")}
          >
            <h6 className="linksAcc">Favourites</h6>
          </Link>
          <Link
            id="payments"
            to="/YourPayments"
            prop1="payments"
            style={{ textDecoration: "none", paddingBottom: "12px" }}
            // onClick={() => clicking("payments")}
          >
            <h6 className="linksAcc">Payments</h6>
          </Link>
          <Link
            id="addresses"
            to="/YourAddresses"
            prop1="addresses"
            style={{ textDecoration: "none", paddingBottom: "12px" }}
            // onClick={() => clicking("addresses")}
          >
            <h6 className="linksAcc">Addresses</h6>
          </Link>
          <Link
            id="settings"
            to="/Settings"
            prop1="settings"
            style={{ textDecoration: "none", paddingBottom: "12px" }}
            // onClick={() => clicking("settings")}
          >
            <h6 className="linksAcc">Settings</h6>
          </Link>
        </div>
        <div className="row" style={{ paddingLeft: "10%", width: "100%" }}>
          <div className="pt-1">
            <h2
              style={{
                textAlign: "left",
                color: "white",
                // paddingLeft: "10%",
                margin: "50px 0",
                fontWeight: "bolder",
              }}
            >
              Account Details
            </h2>
          </div>
          <div className="col-md-3 pt-4 text-start">
            <img
              src="https://myhero.com/images/guest/g293093/hero114678/416x416.jpg"
              alt="img"
              style={{
                width: "220px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="col-md-9">
            <form action="" method="POST">
              <div className="form-group text-start">
                <label
                  className="ps-4"
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "20px",
                    fontWeight: "bold",
                    width: "60%",
                  }}
                >
                  Name
                </label>
                <div
                  style={{
                    display: "inline-block",
                    width: "auto",
                    position: "relative",
                    top: "66px",
                    left: "40px",
                  }}
                >
                  <i
                    id="cnfmicon"
                    className="fa-solid fa-pen text-white fs-4"
                  ></i>
                </div>
                <input
                  type="text"
                  className="inputText form-control mt-3 mb-5 mx-2 fw-bold"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "60%",
                    fontSize: "25px",
                  }}
                  id="name"
                  name="name"
                  value="Username"
                  autocomplete="off"
                  autofocus
                  readOnly
                  required
                ></input>

                <label
                  className="ps-4"
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "20px",
                    fontWeight: "bold",
                    width: "60%",
                  }}
                >
                  User ID
                </label>
                <div
                  style={{
                    display: "inline-block",
                    width: "auto",
                    position: "relative",
                    top: "66px",
                    left: "40px",
                  }}
                >
                  <i
                    id="cnfmicon"
                    className="fa-solid fa-pen text-white fs-4"
                  ></i>
                </div>
                <input
                  type="text"
                  className="inputText form-control mt-3 mb-5 mx-2 fw-bold"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "60%",
                    fontSize: "25px",
                  }}
                  id="uid"
                  name="uid"
                  value="UID123"
                  autocomplete="off"
                  autofocus
                  readOnly
                  required
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="row pb-5" style={{ paddingLeft: "10%", width: "100%" }}>
          <div className="pt-2">
            <h2
              style={{
                textAlign: "left",
                color: "white",
                // paddingLeft: "10%",
                margin: "50px 0",
                fontWeight: "bolder",
              }}
            >
              Personal Details
            </h2>
          </div>
          {/* <form action="" method="POST"> */}
          <div className="col-md-6 text-start">
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Gender
            </p>
            <div
              className="row text-center mt-4"
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
                className="col-6 pt-2"
                style={{
                  borderRight: "1px solid white",
                  backgroundColor: "#0068f9",
                  borderRadius: "10px 0 0 10px",
                }}
              >
                <i class="fa-solid fa-venus"></i>
              </div>
              <div
                className="col-6 pt-2"
                style={{
                  // backgroundColor: "#0068f9",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <i class="fa-solid fa-mars"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Date Of Birth
            </p>
            <div
              className="text-center mt-4"
              style={{
                height: "68px",
                width: "380px",
                border: "1px solid white",
                borderRadius: "10px",
                color: "#0068f9",
                fontSize: "35px",
              }}
            >
              <input
                type="date"
                style={{
                  color: "#0068f9",
                  background: "none",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                  padding: "5px 10px 0 10px",
                }}
              ></input>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Youracc;
