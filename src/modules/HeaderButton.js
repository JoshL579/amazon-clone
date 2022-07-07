import React from 'react'
import { Button, Link } from '@mui/material'
import { theme } from '../theme/theme'

const styles = {
  root: {
    height: '50px',
    borderRadius: 0.5,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      border: '1px solid #fff',
    },
  },
}

export const HeaderButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={styles.root}
    >
      {props.children}
    </Button>
  )
}

export const HeaderLinkImg = (props) => {
  const handleRedirect = () => {
    window.location.href = props.href
  }
  return (
    <Link sx={{ ...styles.root, ...props.sx }} onClick={handleRedirect}></Link>
  )
}
