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
import { useEffect, useState } from "react";

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
  },
  img: {
    width: "100%",
    objectFit: "contain"
  },
};

export const HomeSwiper = (props) => {
  const { type, images } = props;

  // console.log(images);

  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <Grid sx={styles.container}>
      <Typography variant="h6" fontWeight={700}>
        {type}
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        style={{ height: 200 }}
      >
        {images.map((image) =>
          <SwiperSlide style={styles.flex} key={image.id}>
            <img style={styles.img} src={`/images/${image.thumbnail}`}></img>
          </SwiperSlide>
        )}
      </Swiper>
    </Grid>
  );

  // <Grid sx={styles.container}>
  //   <Typography variant="h6" fontWeight={700}>
  //     {data[type].title}
  //   </Typography>
  //   <Swiper
  //     slidesPerView={6}
  //     spaceBetween={30}
  //     modules={[Navigation, Scrollbar]}
  //     navigation
  //     scrollbar={{ draggable: true }}
  //     style={{ height: 200 }}
  //   >
  //     {data[type].elements.map((pc, i) => {
  //       const { image } = pc;
  //       return (
  //         <SwiperSlide key={`${type}-${i}`}>
  //           <img src={image}></img>
  //         </SwiperSlide>
  //       );
  //     })}
  //   </Swiper>
  // </Grid>
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
