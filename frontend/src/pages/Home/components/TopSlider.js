import { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default (props) => {
  const { images } = props;
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      style={{ height: 300 }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img src={`/images/${image.url}`} className="img"></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
