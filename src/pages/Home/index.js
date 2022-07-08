import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Categories from './components/Categories'
import Electronics from './components/Electronics'
import TopSlider from './components/TopSlider'
import InterTopSellerHome from './components/InterTopSellerHome'
import InterTopSellerKitchen from './components/InterTOpSellerKitchen'
import Game from './components/Game'
import Beauty from './components/Beauty'
import Baby from './components/Baby'
import Repurchase from './components/Repurchase'
import History from './components/History'
import SignInBtn from './components/SignInBtn'
import { HomeSwiper } from './components/HomeSwiper'

const styles = {
  root: {
    background: '#EAEDED',
  },
  container: {
    maxWidth: 1500,
    margin: 'auto',
  },
}

export default function Home() {
  return (
    <Grid container sx={styles.root}>
      <Grid item container sx={styles.container}>
        <TopSlider />
        <Categories />
        <HomeSwiper type="popular" />
        <HomeSwiper type="book" />
        <Electronics />
        <InterTopSellerHome />
        <InterTopSellerKitchen />
        <Game />
        <Beauty />
        <Baby />
        <Repurchase />
        <History />
        <SignInBtn />
      </Grid>
    </Grid>
  )
}
