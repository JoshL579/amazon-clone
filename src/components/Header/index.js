import { AppBar, Toolbar, Box, Button, Grid } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/Header/logo.png'
import { SearchBar } from './SearchBar'
import { LanguageSelection } from './LanguageSelection'
import { AccountDropdown } from './AccountDropDown'

const styles = {
  container: {
    height: 60,
    justifyContent: 'center',
  },
  logo: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: '-10px -51px',
    width: 97,
    height: 30,
  },
}

export default function Header() {
  return (
    <AppBar position="static" sx={styles.container} align="center">
      <Toolbar>
        <Grid container direction="row">
          <Grid item container direction="row" md={1.5}>
            <Box sx={styles.logo} />
            <Button variant="contained">Canada</Button>
          </Grid>
          <Grid item xs>
            <SearchBar />
          </Grid>
          <Grid item xs={3}>
            <LanguageSelection />
            <AccountDropdown />
            <Button variant="contained">& Orders</Button>
            <Button variant="contained">Cart</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
