import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

export default class HcVehicle1 extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img
              src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${
                i + 1
              }.jpg`}
            />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg" />
          </div>
          <div>
            <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" />
          </div>
          <div>
            <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg" />
          </div>
          <div>
            <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
