import { Swiper, SwiperSlide } from "swiper/react";
import histories from "../../../data/history.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Paper, Typography, Box, Rating } from "@mui/material";

const styles = {
  history: {
    padding: 2,
    border: "1px solid lightgrey",
    width: "100%"
  },
};

export default function History() {
  return (
    <Paper sx={styles.history}>
      <Typography variant="h6" fontWeight={700}>
        Inspired by your browsing history
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination]}
        navigation={true}
        style={{ height: 400 }}
      >
        {histories.map((history, i) => {
          const { image, price, numberOfReviews, rating, name, shipping } =
            history;
          return (
            <SwiperSlide key={`history-${i}`}>
              <img src={image}></img>
              <Typography>{name}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={1.5}>
                  {numberOfReviews}
                </Typography>
              </Box>
              <Typography variant="h6" component="p" fontWeight={700}>
                ${price}
              </Typography>
              <Typography variant="body2" component="p">
                ${shipping} shipping
              </Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Paper>
  );
}
