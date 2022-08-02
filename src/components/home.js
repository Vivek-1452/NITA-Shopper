import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navnew from "./Navnew";
import Homeslider from "./homeslider";
import Foodslider from "./Foodslider";
import FoodsliderMob from "./FoodsliderMob";
import Grocslider from "./grocslider";
import Saloonslider from "./saloonslider";
import Fashionslider from "./fashionslider";
import Hirecharge from "./hirecharge";
import ResellSlider from "./resellSlider";
import OfferSlider from "./Offerslider";
import Footer from "./Footer";

function Home() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <div style={{ backgroundColor: "rgba(24, 24, 24, 1)" }}>
      <Navnew />
      <Homeslider />
      <OfferSlider />
      {display ? <FoodsliderMob /> : <Foodslider />}
      <Grocslider />
      <Saloonslider />
      <Fashionslider />
      <Hirecharge />
      <ResellSlider />
      <Footer />
    </div>
  );
}

export default Home;
