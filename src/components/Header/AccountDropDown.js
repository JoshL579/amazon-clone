import React, { useState } from 'react'
import { Button, Popover, Typography } from '@mui/material'
import { HeaderButton } from '../../modules/HeaderButton'

const styles = {
  content: {
    p: 2,
  },
}

export const AccountDropdown = () => {
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
      <HeaderButton
        aria-describedby={id}
        variant="contained"
        onMouseEnter={handleClick}
        // onMouseLeave={handleClose}
      >
        Account & Lists
      </HeaderButton>
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
          The content of the Popover.
        </Typography>
      </Popover>
    </>
  )
}
