import { AppBar, Toolbar, Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/Header/logo.png'
import { SearchBar } from './SearchBar'
import { LanguageSelection } from './LanguageSelection'
import { AccountDropdown } from './AccountDropDown'
import { HeaderButton, HeaderButtonWrapper } from '../../modules/HeaderButton'
import { SubHeader } from './SubHeader'

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
    flexBasis: 250,
  },
}

export default function Header() {
  return (
    <>
      <AppBar position="static" sx={styles.container} align="center">
        <Toolbar>
          <Grid container direction="row">
            <HeaderButtonWrapper
              sx={{ marginRight: 1, padding: '1px 8px 0 4px' }}
            >
              <Link href="/">
                <Box sx={styles.logo} />
              </Link>
            </HeaderButtonWrapper>
            <HeaderButton variant="contained">
              <Typography variant="subtitle1">Canada</Typography>
            </HeaderButton>

            <SearchBar />
            <Grid item>
              <LanguageSelection />
              <AccountDropdown />
              <HeaderButton variant="contained">
                <Typography variant="subtitle1">& Orders</Typography>
              </HeaderButton>
              <HeaderButton variant="contained">
                <Typography variant="subtitle1">Cart</Typography>
              </HeaderButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SubHeader />
    </>
  )
}
