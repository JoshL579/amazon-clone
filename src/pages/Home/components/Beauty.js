import { Swiper, SwiperSlide } from "swiper/react";
import book from "../../../data/topSellerBook.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Scrollbar } from "swiper";
import { Paper, Typography } from "@mui/material";

export default function Beauty() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" fontWeight={700}>
        Popular products in Beauty internationally
      </Typography>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        style={{ height: 200 }}
      >
        {book.map((pc) => {
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
