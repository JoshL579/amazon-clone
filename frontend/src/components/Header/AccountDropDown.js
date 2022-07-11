import React from 'react'
import { Grid, Typography, Divider, Link, Box, Button } from '@mui/material'
import { HeaderPopover } from '../../modules/HeaderButton'
import { theme } from '../../theme/theme'

const styles = {
  root: {
    color: '#000',
    '& a:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  content: {
    p: 2,
  },
  link: {
    marginBottom: '7px',
    fontSize: '13px',
    color: '#444',
    fontWeight: '400',
    '& a': {
      color: '#666',
    },
  },
  signinBtn: {
    height: '33px',
    paddingLeft: '60px',
    paddingRight: '60px',
    marginBottom: '14px',
    backgroundImage: '-webkit-linear-gradient(top,#f8e3ad,#EEBA37)',
    border: '1px solid',
    borderColor: '#c89411 #b0820f #99710d',
  },
  signinDescription: {
    fontSize: '11px',
    color: '#777',
  },
}

const AccountDropdownMenu = () => {
  return (
    <Grid container direction="column" sx={styles.root}>
      <Grid item p={1.75} align="center">
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={styles.signinBtn}
        >
          Sign in
        </Button>
        <Typography sx={styles.signinDescription}>
          New customer? <Link underline="none">Start here.</Link>
        </Typography>
      </Grid>
      <Grid item px={1.75}>
        <Divider />
      </Grid>
      <Grid container item direction="row">
        <Grid item md={5.5} p={1.75}>
          <Typography variant="h6" mb={1}>
            Your Lists
          </Typography>
          {leftList.map((link) => (
            <Box sx={styles.link}>
              <Link key={link.id} href={link.href} underline="none">
                {link.label}
              </Link>
            </Box>
          ))}
        </Grid>
        <Grid p={1.75}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item md={5.5} p={1.75}>
          <Typography variant="h6" mb={1}>
            Your Account
          </Typography>
          {rightList.map((link) => (
            <Box sx={styles.link}>
              <Link key={link.id} href={link.href} underline="none">
                {link.label}
              </Link>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export const AccountDropdown = () => {
  return (
    <HeaderPopover popover={<AccountDropdownMenu />} width={470}>
      <Typography variant="subtitle1">Account & Lists</Typography>
    </HeaderPopover>
  )
}

const leftList = [
  {
    id: 1,
    label: 'Create a List',
    href: '#',
  },
  {
    id: 2,
    label: 'Find a List or Registry',
    href: '#',
  },
  {
    id: 3,
    label: 'AmazonSmile Charity Lists',
    href: '#',
  },
]

const rightList = [
  {
    id: 1,
    label: 'Account',
    href: '#',
  },
  {
    id: 2,
    label: 'Orders',
    href: '#',
  },
  {
    id: 3,
    label: 'Recommendations',
    href: '#',
  },
  {
    id: 4,
    label: 'Browsing History',
    href: '#',
  },
  {
    id: 5,
    label: 'Watchlist',
    href: '#',
  },
  {
    id: 6,
    label: 'Video Purchases & Rentals',
    href: '#',
  },
  {
    id: 7,
    label: 'Kindle Unlimited',
    href: '#',
  },
  {
    id: 8,
    label: 'Content & Devices',
    href: '#',
  },
  {
    id: 9,
    label: 'Subscribe & Save Items',
    href: '#',
  },
  {
    id: 10,
    label: 'Memberships & Subscriptions',
    href: '#',
  },
  {
    id: 11,
    label: 'Music Library',
    href: '#',
  },
]
