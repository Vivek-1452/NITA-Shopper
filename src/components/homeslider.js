import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./homeslider.css";

function Homeslider() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <div style={{ paddingLeft: display ? "0" : "100px", paddingTop: "25px" }}>
      <Carousel>
        <div>
          <img
            src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
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
  );
}

export default Homeslider;
