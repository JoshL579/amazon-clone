import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import { theme } from '../../theme/theme'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { HeaderButton } from '../../modules/HeaderButton'

export const SubHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const styles = {
    headerBtn: {
      padding: '2px 8px',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      borderRadius: '2px',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '1px solid #fff',
      },
    },
    toggle: {
      marginRight: '6px',
      padding: 0,
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      borderRadius: '2px',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '1px solid #fff',
      },
      '& button': {
        padding: 0
      }
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    avatar: {
      backgroundColor: theme.palette.grey.main,
      color: theme.palette.primary.light,
      width: 25,
      height: 25,
    },
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.light, maxHeight: '39px' }}
    >
      <Toolbar style={{ maxHeight: 'inherit', minHeight: '39px' }}>
        <HeaderButton sx={styles.toggle}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
            <Typography variant="h6">All</Typography>
          </IconButton>
        </HeaderButton>
        <Sidebar
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <HeaderButton sx={styles.headerBtn}>
          <Typography variant="body2">
            <Link to="/deal" style={styles.link}>
              Today's Deals
            </Link>
          </Typography>
        </HeaderButton>
        <HeaderButton sx={styles.headerBtn}>
          <Typography variant="body2">
            <Link to="/customer" style={styles.link}>
              Customer Service
            </Link>
          </Typography>
        </HeaderButton>
        <HeaderButton sx={styles.headerBtn}>
          <Typography variant="body2">
            <Link to="/registry" style={styles.link}>
              Registry
            </Link>
          </Typography>
        </HeaderButton>
        <HeaderButton sx={styles.headerBtn}>
          <Typography variant="body2">
            <Link to="/giftfcard" style={styles.link}>
              Gift Cards
            </Link>
          </Typography>
        </HeaderButton>
        <HeaderButton sx={styles.headerBtn}>
          <Typography variant="body2">
            <Link to="/sell" style={styles.link}>
              Sell
            </Link>
          </Typography>
        </HeaderButton>
      </Toolbar>
    </AppBar>
  )
}
