import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default (props) => {
  const { images } = props;
  return (
    <Swiper modules={[Navigation]} navigation style={{ height: 300 }}>
      {images.map((image) =>
        <SwiperSlide key={image.id}>
          <img
            src={`/images/${image.url}`}
            className="img"
          ></img>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
