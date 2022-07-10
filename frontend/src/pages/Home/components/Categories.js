import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../../../data/data.json'

const styles = {
  container: {
    padding: '10px 0',
    width: '100%',
  },
  cardContainer: {
    padding: '10px 10px',
  },
  card: {
    padding: '20px 20px 15px 20px',
    backgroundColor: '#fff',
  },
}

export default function Categories() {
  return (
    <Grid container sx={styles.container}>
      {categories.map((category, i) => {
        const { image, note, title } = category
        return (
          <Grid item xs={3} sx={styles.cardContainer} key={`catagory-${i}`}>
            <Grid item sx={styles.card}>
              <Typography variant="h6" fontWeight={700}>
                {title}
              </Typography>
              <Link to="/">
                {typeof image === 'string' ? (
                  <img src={image} className="img" />
                ) : (
                  <Grid container spacing={1}>
                    {image.map((img, i) => 
                      <Grid item xs={6} key={`catagory-img-${i}`}>
                        <img src={img} className="img" />
                      </Grid>
                    )}
                  </Grid>
                )}
              </Link>
              <Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  {note}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
