import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default () => {
  return (
    <Swiper modules={[Navigation]} navigation style={{ height: 300 }}>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/1400x300.png"
          className="img"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/1400x300.png"
          className="img"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/1400x300.png"
          className="img"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/1400x300.png"
          className="img"
        ></img>
      </SwiperSlide>
    </Swiper>
  );
};
