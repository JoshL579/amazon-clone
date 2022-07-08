// import { Swiper, SwiperSlide } from "swiper/react";
// import popular from "../../../data/popularPc.json";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// // import required modules
// import { Navigation, Scrollbar } from "swiper";
// import { Typography, Grid } from "@mui/material";

// const styles = {
//   container: {
//     p: "10px",
//     width: "100%",
//     backgroundColor: "#fff",
//   },
// };

// export default function SwiperModule() {
//   return (
//     <Grid sx={styles.container}>
//       <Typography variant="h6" fontWeight={700}>
//         Popular products in PC internationally
//       </Typography>
//       <Swiper
//         slidesPerView={6}
//         spaceBetween={30}
//         modules={[Navigation, Scrollbar]}
//         navigation
//         scrollbar={{ draggable: true }}
//         style={{ height: 200 }}
//       >
//         {popular.map((pc) => {
//           const { image } = pc;
//           return (
//             <SwiperSlide>
//               <img src={image}></img>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </Grid>
//   );
// }
