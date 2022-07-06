import React, { useState } from 'react'
import { Popover, Typography, Button } from '@mui/material'

const styles = {
  content: {
    p: 2,
  },
}

export const LanguageSelection = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onMouseEnter={handleClick}
        // onMouseLeave={handleClose}
      >
        Language
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={styles.content} onMouseLeave={handleClose}>
          English
          <br />
          Chinese
          <br />
          Spanish
        </Typography>
      </Popover>
    </>
  )
}
