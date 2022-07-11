import React from "react";
import { Link } from "react-router-dom";
import bglogin from "./images/bglogin.png";
import "./login.css";

function login() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          backgroundImage: `url(${bglogin})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,1)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div className="row text-start">
          <div className="col-md-6" style={{ paddingLeft: "5%" }}>
            <Link to="/SignUp">
              <button
                className="btn fs-6 text-white"
                style={{
                  fontWeight: "600",
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  padding: "15px 80px",
                  marginTop: "80px",
                  borderRadius: "12px",
                  letterSpacing: "0.08em",
                  boxShadow: "5px 15px 15px rgba(0, 0, 0, 0.25)",
                }}
              >
                SignUp
              </button>
            </Link>
            <p
              style={{
                fontSize: "60px",
                letterSpacing: "0.06em",
                marginTop: "130px",
              }}
            >
              <span
                className="fw-bolder text-white"
                style={{
                  fontWeight: "1000",
                }}
              >
                NITA
              </span>{" "}
              <span
                style={{
                  fontWeight: "400",
                  color: "#0066F9",
                }}
              >
                Shopper
              </span>
            </p>
            <p
              className="text-white"
              style={{ fontSize: "25px", fontWeight: "400" }}
            >
              If you have a busy day we're up for it with a plan
            </p>
          </div>
          <div
            className="col-md-6"
            style={{
              paddingLeft: "5%",
              display: "flex",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <form action="" method="POST">
              <div className="form-group">
                <div
                  style={{
                    backgroundColor: "rgba(0, 102, 249, 0.2)",
                    width: "fit-content",
                    padding: "30px 50px",
                    borderRadius: "12px",
                    boxShadow: "10px 15px 15px rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      width: "fit-content",
                      padding: "19px 26px",
                      borderRadius: "50%",
                      fontSize: "22px",
                      boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.25)",
                      margin: "auto",
                    }}
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "rgba(0, 102, 249, 1)" }}
                    ></i>
                  </div>
                  <input
                    type="text"
                    className="inputText form-control mt-5 mx-2"
                    style={{
                      border: "none",
                      outline: "none",
                      width: "300px",
                    }}
                    id="uname"
                    name="uname"
                    placeholder="Username"
                    autocomplete="off"
                    autofocus
                    required
                  ></input>
                  <input
                    type="password"
                    className="inputText form-control mt-4 mx-2"
                    style={{
                      border: "none",
                      outline: "none",
                      width: "300px",
                    }}
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  ></input>
                  <div>
                    <label
                      className="text-white-50 mt-5"
                      style={{ fontSize: "12px" }}
                    >
                      <input
                        type="checkbox"
                        className=""
                        style={{ width: "20px" }}
                        id="remember"
                        name="remember"
                      />
                      Remember Password
                    </label>
                    <a
                      href="."
                      className="float-end text-white-50 mt-5"
                      style={{ fontSize: "12px" }}
                    >
                      Forgot Password ?
                    </a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn fs-6 text-white text-center mt-5"
                      style={{
                        fontWeight: "600",
                        backgroundColor: "rgba(255, 255, 255, 0.16)",
                        padding: "15px 80px",
                        borderRadius: "12px",
                        letterSpacing: "0.08em",
                        boxShadow: "5px 15px 15px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
