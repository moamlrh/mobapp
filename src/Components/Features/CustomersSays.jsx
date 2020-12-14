import React from "react";
import "./CustomersSays.css";
import logoOfSwiper from "../../assest/image/person.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Navigation]);
const CustomersSlider = [
  {
    name: "Ahmed Mohammed",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
    country: "Iraq",
  },
  {
    name: "Crystak Gord",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
    country: "United SStates",
  },
  {
    name: "Abo Flah",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
    country: "UA",
  },
  {
    name: "Moaml Qassim",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ",
    country: "Saudia Arabia",
  },
];
const CustomersSays = () => {
  return (
    <div className="customers">
      <div className="header">
        <span> TESTIMONIALS </span>
        <h2>What our Customers Says</h2>
      </div>
      <div className="swiper-qutes">
        <Swiper
          navigation
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {CustomersSlider.map((customer, i) => (
            <SwiperSlide key={i}>
              <div className="swiper">
                <div className="logo">
                  <img src={logoOfSwiper} alt="logo of swiper" />
                </div>
                <div className="text">
                  <p>{customer.text}</p>
                  <h4>{customer.name}</h4>
                  <span>{customer.country}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomersSays;
