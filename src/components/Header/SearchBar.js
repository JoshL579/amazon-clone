import React from 'react'
import { TextField } from '@mui/material'

const styles = {
  input: {
    backgroundColor: '#fff',
    width: '100%',
  },
}

export const SearchBar = () => {
  return <TextField variant="outlined" size="small" sx={styles.input} />
}
