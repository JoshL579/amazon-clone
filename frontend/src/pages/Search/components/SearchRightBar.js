import React from "react";
import { Grid, Typography, Rating } from "@mui/material";
import { theme } from "../../../theme/theme";

const SearchRightBar = ({ products }) => {
  return (
    <Grid container item xs={9} spacing={1}>
      <Typography variant="h6">RESULTS</Typography>
      {products.map((product, index) => {
        const { title, price, ratingNum, thumbnail, rating } = product;
        return (
          <Grid item display="flex" gap={2} key={index} sx={{ mb: 3 }}>
            <img
              src={`/images/${thumbnail}`}
              alt="good"
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "container",
              }}
            ></img>
            <Grid item>
              <Typography>{title}</Typography>
              <Grid display="flex" alignItems="center">
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={1.5}>
                  {ratingNum}
                </Typography>
              </Grid>
              <Typography variant="h5" fontWeight="bold">
                ${price}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.grey.canada }}
              >
                Ships to Canada
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

const monitors = [
  {
    id: 1,
    name: "Acer EK220Q Abi 21.5 Full HD (1920 x 1080) VA Monitor | 75Hz Refresh Rate | 5ms Response Time | 1 x HDMI & 1 x VGA Port (HDMI Cable Included)",
    rating: 4.5,
    price: "429.99",
    numberOfReviews: "18",
    img: "https://via.placeholder.com/200x200.png",
  },
  // {
  //   id: 2,
  //   name: "SAMSUNG 34” S65UA Series Computer Monitor, Ultrawide QHD Screen, HDR10, 100Hz, Curved, USB- C, Adjustable Stand, Intelligent Eye Care, LS34A650UXNXGO, Black",
  //   rating: 4.5,
  //   price: "537.81",
  //   numberOfReviews: "82",
  //   img: "https://via.placeholder.com/200x200.png",
  // },
  // {
  //   id: 3,
  //   name: "Deco Gear 39 Curved Ultrawide Gaming Monitor, 2560x1440, 1ms MPRT, 165 Hz, 16:9, HDR400, 4000:1",
  //   rating: 5,
  //   price: "499.99",
  //   numberOfReviews: "6",
  //   img: "https://via.placeholder.com/200x200.png",
  // },
];

export default SearchRightBar;
