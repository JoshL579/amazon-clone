import React from 'react'
import {
  Typography,
  Box,
  Grid,
  FormControlLabel,
  Divider,
  FormControl,
  RadioGroup,
  Radio,
} from '@mui/material'
import { HeaderPopover } from '../../modules/HeaderButton'
import flag from '../../assets/img/Header/us_flag.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Link } from 'react-router-dom'
import { theme } from '../../theme/theme'

const styles = {
  content: {
    p: 2,
    color: '#000',
  },
  radio: {
    ...theme.typography.body3,
    height: '28px',
    '& span': {
      fontSize: 'inherit',
    },
    '& .MuiFormControlLabel-label:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  divider: {
    margin: '8px 0',
  },
  arrow: {
    fontSize: '18px',
    color: '#aaa',
  },
}

const LanguageSelectionMenu = () => {
  return (
    <Box sx={styles.content}>
      <Grid container alignItems="center" mb={1}>
        <Grid item xs>
          <Typography variant="body3">Change language</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body4" ml={1}>
            <Link to="/">Learn more</Link>
          </Typography>
        </Grid>
      </Grid>
      <FormControl sx={{ width: '100%' }}>
        <RadioGroup defaultValue={languages[0].value}>
          {languages.map((language) => (
            <div key={language.value}>
              <FormControlLabel
                value={language.value}
                control={<Radio color="secondary" size="small" />}
                label={language.label}
                sx={styles.radio}
              ></FormControlLabel>
              {language.selected && <Divider sx={styles.divider} />}
            </div>
          ))}
        </RadioGroup>
      </FormControl>
      <Divider sx={styles.divider} />
      <Grid container alignItems="center">
        <Typography variant="body3">Change currency</Typography>
        <Typography variant="body4" ml={1}>
          <Link to="/">Learn more</Link>
        </Typography>
      </Grid>
      <Grid container justifyContent="space-between">
        <Typography variant="body3">$ - USD - US Dollar</Typography>
        <Typography variant="body3">
          <Link to="/">Change</Link>
        </Typography>
      </Grid>
      <Divider sx={styles.divider} />
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="body3">
            <img
              src={flag}
              width={17}
              style={{ verticalAlign: 'text-bottom' }}
            />
            You are shopping on
          </Typography>
          <Typography variant="body3">Amazon.com</Typography>
        </Grid>
        <Grid item mt={2}>
          <Typography variant="body3">
            <Link to="/">Change country/region.</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export const LanguageSelection = () => {
  return (
    <>
      <HeaderPopover
        placement="bottom-start"
        popover={<LanguageSelectionMenu />}
        width={240}
        sx={{ padding: '6px' }}
      >
        <Box sx={{ paddingTop: 1.5 }}>
          <img src={flag} width={26}></img>
          <ArrowDropDownIcon sx={styles.arrow} />
        </Box>
      </HeaderPopover>
    </>
  )
}

const languages = [
  {
    label: 'English - EN',
    value: 'en',
    selected: true,
  },
  {
    label: 'español - ES',
    value: 'es',
  },
  {
    label: 'العربية - AR',
    value: 'ar',
  },
  {
    label: 'Deutsch - DE',
    value: 'de',
  },
  {
    label: 'עברית - HE',
    value: 'he',
  },
  {
    label: '한국어 - KO',
    value: 'ko',
  },
  {
    label: 'português - PT',
    value: 'pt',
  },
  {
    label: '中文 (简体) - ZH',
    value: 'zh-cn',
  },
  {
    label: '中文 (繁體) - ZH',
    value: 'zh-tw',
  },
]
