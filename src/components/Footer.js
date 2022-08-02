import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import heart from "./images/heart.png";

function Footer() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <div
      style={{
        backgroundColor: "#31343c",
        color: "white",
        paddingLeft: display ? "0" : "100px",
      }}
    >
      <div className="container-fluid text-start">
        <div className="row py-5 m-0">
          <div className="col-md-4 ms-lg-5 my-3">
            <h5
              className="mx-auto fw-bold"
              style={{ color: "rgba(0, 102, 249, 1)" }}
            >
              About Us
            </h5>
            <br />
            <p>
              Pladex is an integrated platform where students can connect and
              build a community with like-minded peers to present their ideas
              and clear their queries. We aim at bringing the equity of wide
              ranging Ed-resources among all the students.
            </p>
          </div>
          <div className="d-sm-none d-md-block col-md-1"></div>
          {/* <div className="col-6 col-lg-2 my-3">
            <h5 className="mx-auto fw-bold">Quick Links</h5>
            <br />
            <Link to="/Focus" className="links">
              <p>Focus Next India</p>
            </Link>
            <Link to="/PodiumTalks" className="links">
              <p>Podium Talks</p>
            </Link>
            <Link to="/EventLibrary" className="links">
              <p>Event Library</p>
            </Link>
          </div> */}
          {/* <div className="col-6 col-lg-2 my-3">
            <h5 className="mx-auto fw-bold">Community</h5>
            <br />
            <Link to="/Team" className="links">
              <p>Our Team</p>
            </Link>
            <Link to="/JoinUs" className="links">
              <p>Join Us</p>
            </Link>
            <Link to="/HelpAndSupport" className="links">
              <p>Help & Support</p>
            </Link>
          </div> */}
          <div className="col-md-3 my-3">
            <h5
              className="mx-auto fw-bold"
              style={{ color: "rgba(0, 102, 249, 1)" }}
            >
              Features
            </h5>
            <br />
            <Link to="/ComingSoon" className="links">
              <p>DLibrary</p>
            </Link>
            <a
              className="links"
              href="https://www.collegeexplorer.in/"
              target="_blank"
              rel="noreferrer"
            >
              <p>College Explorer</p>
            </a>
            <a
              className="links"
              href="https://pladex.in/predictor.html"
              target="_blank"
              rel="noreferrer"
            >
              <p>College Predictor</p>
            </a>
          </div>
          <div className="col-md-3 my-3">
            <h5
              className="mx-auto fw-bold"
              style={{ color: "rgba(0, 102, 249, 1)" }}
            >
              Contact Us
            </h5>
            <br />
            <a
              href="mailto:pladexstudentscorner@gmail.com?subject=Contacting for queries/suggestions."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {/* <i class="fa-solid fa-envelope"> </i> */}
              {"    "}
              pladexstudentscorner@gmail.com
            </a>
            <br />
            <br />
            <a
              href="tel:+918688055328"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {/* <i class="fa-solid fa-phone"> </i>  */}
              +91 8688055328
            </a>
          </div>
        </div>
        <hr
          style={{
            height: "4px",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 102, 249, 1), rgba(0, 0, 0, 0))",
            marginTop: "0",
          }}
        />
        <div className="row text-center">
          <h6 className="my-lg-5 my-3 fw-light">
            Developed with{" "}
            <img
              src={heart}
              alt="love"
              style={{ height: "20px", position: "relative", bottom: "3px" }}
            />{" "}
            by Web Dev team
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
