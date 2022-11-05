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
    width: "100%",
  },
};

export default function History(props) {
  const { images } = props;
  if (images.length === 0) return <></>;
  return (
    <Paper sx={styles.history}>
      <Typography variant="h6" fontWeight={700}>
        Inspired by your browsing history
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        pagination={false}
        modules={[Navigation, Pagination]}
        navigation={true}
        style={{ height: "fit-content" }}
      >
        {images.reverse().map((image, i) => (
          <SwiperSlide key={`history-${image.id}`}>
            <div
              style={{
                textAlign: "center",
                maxWidth: "100px",
                maxHeight: "150px",
              }}
            >
              <img
                src={`/images/${image.thumbnail}`}
                style={{
                  width: "100px",
                  height: "150px",
                  objectFit: "contain",
                }}
              ></img>
            </div>
            <Typography>
              {image.title.length > 80
                ? image.title.slice(0, 80) + `...`
                : image.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating
                name="read-only"
                value={image.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              {/* <Typography variant="body2" component="p" marginLeft={1.5}>
                  {numberOfReviews}
                </Typography> */}
            </Box>
            <Typography variant="h6" component="p" fontWeight={700}>
              ${image.price.toFixed(2)}
            </Typography>
            {/* <Typography variant="body2" component="p">
                ${shipping} shipping
              </Typography> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Paper>
  );
}
