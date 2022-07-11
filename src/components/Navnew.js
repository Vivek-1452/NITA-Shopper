import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import groceries from "./images/groceries.png";
import food from "./images/food.png";
import saloon from "./images/saloon.png";
import fashion from "./images/fashion.png";
import books from "./images/books.png";
import hire from "./images/hire.png";
import resell from "./images/resell.png";
import more from "./images/more.png";

const Navnew = (props) => {
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

  const [active, setactive] = useState([
    { id: 1, state: true },
    { id: 2, state: false },
  ]);

  const clicking = (id1, id2) => {
    if (id1 == "nav1") {
      document.location.href = "/Cart";
    } else if (id1 == "nav2") {
      document.location.href = "/Notifications";
    }
  };

  // const snav = () => {
  //   if (document.getElementById("sidenav").style.display == "none") {
  //     document.getElementById("sidenav").style.display = "block";
  //   } else if (document.getElementById("sidenav").style.display == "block") {
  //     document.getElementById("sidenav").style.display = "none";
  //   }
  // };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        id="sidenav"
        style={{
          width: "100px",
          height: "100vh",
          position: "fixed",
          backgroundColor: "rgba(46, 46, 46, 1)",
          color: "white",
          paddingTop: "80px",
          display: display ? "none" : "block",
        }}
      >
        <i
          className="fa-solid fa-house"
          style={{
            fontSize: "20px",
            padding: "20px 0 0 0",
            width: "100px",
            backgroundColor: "rgba(46, 46, 46, 1)",
          }}
        ></i>
        <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Home</p>
        <Link className="sidelinks" to="/Groceries">
          <img
            src={groceries}
            alt="Groceries"
            style={{ width: "30px", padding: "10px 0 0 0" }}
          />
          <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Groceries</p>
        </Link>
        <Link className="sidelinks" to="/Food">
          <img
            src={food}
            alt="Food"
            style={{ width: "30px", padding: "10px 0 0 0" }}
          />
          <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Food</p>
        </Link>
        <Link className="sidelinks" to="/Saloon">
          <img
            src={saloon}
            alt="Saloon"
            style={{ width: "30px", padding: "10px 0 0 0" }}
          />
          <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Saloon</p>
        </Link>
        <Link className="sidelinks" to="/Fashion">
          <img
            src={fashion}
            alt="Fashion"
            style={{ width: "30px", padding: "10px 0 0 0" }}
          />
          <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Fashion</p>
        </Link>
        <Link className="sidelinks" to="/Books">
          <img
            src={books}
            alt="Books"
            style={{ width: "30px", padding: "10px 0 0 0" }}
          />
          <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Books</p>
        </Link>
        <img
          src={hire}
          alt="Hire Charge"
          style={{ width: "30px", padding: "10px 0 0 0" }}
        />
        <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Hire Charge</p>
        <img
          src={resell}
          alt="Resell"
          style={{ width: "30px", padding: "10px 0 0 0" }}
        />
        <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>Resell</p>
        <img
          src={more}
          alt="More"
          style={{ width: "30px", padding: "10px 0 0 0" }}
        />
        <p style={{ fontSize: "10px", letterSpacing: "0.08em" }}>More</p>
      </div>
      <div
        className="p-0"
        style={{
          fontFamily: "Montserrat, sans-serif",
          height: "68px",
          width: "100vw",
        }}
      >
        <Container
          className="navBar p-0"
          fluid
          style={{
            width: "100vw",
            color: "white",
            backgroundColor: "black",
          }}
        >
          <Navbar expand="md" className="py-0 pe-md-0 pe-lg-4">
            <i
              className="fa-solid fa-bars"
              style={{
                fontSize: "30px",
                padding: display ? "10px 0" : "25px 30px",
                width: display ? "50px" : "100px",
                backgroundColor: "rgba(46, 46, 46, 1)",
                borderRadius: display ? "5px" : "0",
                marginLeft: display ? "10px" : "0",
              }}
              // onClick={() => snav()}
            ></i>
            <NavbarBrand
              className="pt-3"
              style={{ paddingLeft: display ? "15px" : "30px" }}
            >
              <a href="." className="text-dark text-decoration-none">
                <h2
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  <p
                    style={{
                      fontSize: "35px",
                      letterSpacing: "0.06em",
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
                </h2>
              </a>
            </NavbarBrand>

            <NavbarToggle />
            <NavbarCollapse className="justify-content-end" id="navbarCollapse">
              <div className={display1 ? "input-group d-none" : "input-group"}>
                <input
                  type="search"
                  placeholder="Search"
                  style={{
                    borderRadius: "50px 0 0 50px",
                    padding: "0 20px",
                    width: "350px",
                    margin: "0 0 0 20%",
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
              <Nav className="d-flex align-items-center position-relative my-0 py-0">
                <Link
                  id="nav1"
                  className={
                    active[0].state
                      ? "mx-2 my-2 links text-white px-3 py-2 active text-decoration-none"
                      : "mx-2 my-2 links text-white px-3 py-2 notactive text-decoration-none"
                  }
                  style={{ fontSize: "25px" }}
                  onClick={() => clicking("nav1", "nav2")}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link
                  id="nav2"
                  className={
                    active[1].state
                      ? "mx-2 my-2 links text-white px-3 py-2 active text-decoration-none"
                      : "mx-2 my-2 links text-white px-3 py-2 notactive text-decoration-none"
                  }
                  style={{ fontSize: "25px" }}
                  onClick={() => clicking("nav2", "nav1")}
                >
                  <i className="fa-solid fa-bell"></i>
                </Link>
                <Link to="/YourAccount" query={{ prop1: "profile" }}>
                  <a
                    href="."
                    className="mx-2 pb-1 profile text-decoration-none"
                  >
                    <img
                      src="https://myhero.com/images/guest/g293093/hero114678/416x416.jpg"
                      alt="img"
                      style={{
                        width: "40px",
                        borderRadius: "50%",
                        border: "2px solid rgba(0, 102, 249, 1)",
                      }}
                    />
                  </a>
                </Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Navnew;
