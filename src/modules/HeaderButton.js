import React from 'react'
import { Button, Box, Tooltip } from '@mui/material'
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
  popover: {
    backgroundColor: '#fff',
  },
}

export const HeaderButton = (props) => {
  return (
    <Button variant="contained" sx={styles.root} {...props}>
      {props.children}
    </Button>
  )
}

export const HeaderButtonWrapper = (props) => {
  return (
    <Box sx={{ ...styles.root }} {...props}>
      {props.children}
    </Box>
  )
}

export const HeaderPopover = (props) => {
  return (
    <Tooltip
      arrow
      title={props.popover}
      {...props}
      // PopperProps={{ sx: styles.popover }}
    >
      <Button variant="contained" sx={styles.root} {...props} popover={null}>
        {props.children}
      </Button>
    </Tooltip>
  )
}
