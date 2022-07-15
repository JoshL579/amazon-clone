import { Swiper, SwiperSlide } from "swiper/react";
import popular from "../../../data/popularPc.json";
import book from "../../../data/topSellerBook.json";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Scrollbar } from "swiper";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  container: {
    p: "10px",
    width: "100%",
    backgroundColor: "#fff",
    mb: "20px",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    width: 200,
    height: 200,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  title: {
    textTransform: "capitalize",
  },
};

export const HomeSwiper = (props) => {
  const { type, images } = props;

  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <Grid sx={styles.container}>
      <Typography variant="h6" fontWeight={700} sx={styles.title}>
        {type}
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        style={{ height: 220 }}
      >
        {images.map((image) => (
          <SwiperSlide style={styles.flex} key={image.id}>
            <Link to={`/detail/${image.id}`}>
              <img style={styles.img} src={`/images/${image.thumbnail}`}></img>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

const data = {
  popular: {
    title: "Popular products in PC internationally",
    elements: popular,
  },
  book: {
    title: "Top Sellers in Books for you",
    elements: book,
  },
  home: {
    title: "International top sellers in Home",
    elements: popular,
  },
  kitchen: {
    title: "International top sellers in Kitchen",
    elements: popular,
  },
  beauty: {
    title: "Popular products in Beauty internationally",
    elements: book,
  },
  baby: {
    title: "Top Sellers in Baby Products for you",
    elements: popular,
  },
  repurchase: {
    title: "Frequently repurchased in Supplies",
    elements: popular,
  },
};
