import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services1 from "../assets/images/services1.jpg";
import Services2 from "../assets/images/services2.jpg";
import Services3 from "../assets/images/services3.webp";

const CustomerReviews = () => {
  const Services = [
    {
      heading: "Chennai Express",
      img: Services1,
    },
    {
      heading: "Teams",
      img: Services2,
    },
    {
      heading: "IPL 2022",
      img: Services3,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1438 },
      items: 3,
      //   slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1438, min: 641 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 641, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="Customerreviewcaruseldiv1">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={false}
          className="CustomerreviewCarousel"
        >
          {Services.map((item) => (
            <div className="servicegrid">
              <img
                src={item.img}
                style={{ width: "100%", objectFit: "cover", height: "300px" }}
              ></img>

              <h5 className="customername">{item.label}</h5>
              <p className="customerdescription">{item.heading}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CustomerReviews;
