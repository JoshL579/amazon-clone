import { Swiper, SwiperSlide } from 'swiper/react'
import popular from '../../../data/popularPc.json'
import book from '../../../data/topSellerBook.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

// import required modules
import { Navigation, Scrollbar } from 'swiper'
import { Typography, Grid } from '@mui/material'

const styles = {
  container: {
    p: '10px',
    width: '100%',
    backgroundColor: '#fff',
    mb: '20px',
  },
}

const data = {
  popular: {
    title: 'Popular products in PC internationally',
    elements: popular,
  },
  book: {
    title: 'Top Sellers in Books for you',
    elements: book,
  },
}

export const HomeSwiper = (props) => {
  const { type } = props
  return (
    <Grid sx={styles.container}>
      <Typography variant="h6" fontWeight={700}>
        {data[type].title}
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        style={{ height: 200 }}
      >
        {data[type].elements.map((pc, i) => {
          const { image } = pc
          return (
            <SwiperSlide key={`${type}-${i}`}>
              <img src={image}></img>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Grid>
  )
}
