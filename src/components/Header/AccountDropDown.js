import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { HeaderPopover } from '../../modules/HeaderButton'

const styles = {
  content: {
    p: 2,
  },
}

export const AccountDropdown = () => {
  return (
    <>
      <HeaderPopover
        popover={
          <Typography sx={styles.content}>
            The content of the Popover.
          </Typography>
        }
      >
        Account & Lists
      </HeaderPopover>
    </>
  )
}
