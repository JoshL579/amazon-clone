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
    padding: 0,
  },
  popoverArrow: {
    color: '#fff',
    fontSize: '1rem',
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
  const { width } = props
  return (
    <Tooltip
      arrow
      title={props.popover}
      componentsProps={{
        tooltip: {
          sx: {
            ...styles.popover,
            width: width || 'max-content',
            maxWidth: width || '470px',
          },
        },
        arrow: { sx: styles.popoverArrow },
      }}
      enterDelay={500}
      {...props}
    >
      <Button variant="contained" sx={styles.root} {...props} popover={null}>
        {props.children}
      </Button>
    </Tooltip>
  )
}
