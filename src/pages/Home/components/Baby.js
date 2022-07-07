import { Swiper, SwiperSlide } from "swiper/react";
import popular from "../../../data/popularPc.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Scrollbar } from "swiper";
import { Paper, Typography } from "@mui/material";

export default function Baby() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" fontWeight={700}>
        Top Sellers in Baby Products for you
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        style={{ height: 200 }}
      >
        {popular.map((pc) => {
          const { image } = pc;
          return (
            <SwiperSlide>
              <img src={image}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Paper>
  );
}
