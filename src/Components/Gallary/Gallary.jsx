import React from "react";
import "./Gallary.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import screen1 from "../../assest/image/screen1.jpg";
import screen2 from "../../assest/image/screen2.jpg";
import screen3 from "../../assest/image/screen3.jpg";
import { Container } from "@material-ui/core";

SwiperCore.use([Autoplay,Pagination]);
const screenShotsSldide = [
  { image: screen1 },
  { image: screen2 },
  { image: screen3 },
  { image: screen1 },
  { image: screen3 },
];
const Gallary = () => {
  return (
    <div className="gallery">
      <Container>
        <div className="title">
          <span>GALLERY</span>
          <h2>App Screenshots</h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
              clickable:true,
              type:'bullets'
          }}
          loop={true}
          centeredSlides={true}
        >
          {screenShotsSldide.map((item) => (
            <SwiperSlide className="slides">
              <img src={item.image} alt="the screen shot" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Gallary;
