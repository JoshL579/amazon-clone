import { AppBar, Toolbar, Box, Button, Grid } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/Header/logo.png'
import { SearchBar } from './SearchBar'
import { LanguageSelection } from './LanguageSelection'
import { AccountDropdown } from './AccountDropDown'
import { HeaderButton, HeaderLinkImg } from '../../modules/HeaderButton'

const styles = {
  container: {
    height: 60,
    justifyContent: 'center',
    '& > div': {
      height: 60,
      minHeight: 60,
    },
  },
  logo: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: '-10px -51px',
    width: 97,
    height: 30,
    marginTop: '12px',
  },
  gridItemLeft: {
    flexBasis: 200,
  },
}

export default function Header() {
  return (
    <AppBar position="static" sx={styles.container} align="center">
      <Toolbar>
        <Grid container direction="row">
          <Grid item container sx={styles.gridItemLeft}>
            <HeaderLinkImg sx={styles.logo} />
            <HeaderButton variant="contained">Canada</HeaderButton>
          </Grid>

          <SearchBar />

          <Grid item>
            <LanguageSelection />
            <AccountDropdown />
            <HeaderButton variant="contained">& Orders</HeaderButton>
            <HeaderButton variant="contained">Cart</HeaderButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
