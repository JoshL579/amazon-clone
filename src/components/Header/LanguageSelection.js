import React from 'react'
import { Typography } from '@mui/material'
import { HeaderPopover } from '../../modules/HeaderButton'

const styles = {
  content: {
    p: 2,
  },
}

export const LanguageSelection = () => {
  return (
    <>
      <HeaderPopover
        placement="bottom-start"
        popover={
          <Typography sx={styles.content}>
            English
            <br />
            Chinese
            <br />
            Spanish
          </Typography>
        }
      >
        <Typography variant="subtitle1">Language</Typography>
      </HeaderPopover>
    </>
  )
}
