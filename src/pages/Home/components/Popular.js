import { Swiper, SwiperSlide } from "swiper/react";
import popular from "../../../data/popularPc.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Paper, Typography } from "@mui/material";

export default function Popular() {
  return (
    <Paper sx={{padding: 2}}>
      <Typography variant="h6" fontWeight={700}>
        Popular products in PC internationally
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation]}
        navigation
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
