import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
        light: '#232f3e',
        main: '#131921',
    },
    secondary: {
      main: '#febd69',
    },
    grey: {
      main: '#f3f3f3',
      contrastText: '#000'
    }
  },
})
