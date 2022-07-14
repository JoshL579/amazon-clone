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

export default function Categories(props) {
  const { images } = props;
  return (
    <Grid container sx={styles.container}>
      {images.map((image) =>
        <Grid item xs={3} sx={styles.cardContainer} key={`catagory-${image.id}`}>
          <Grid item sx={styles.card}>
            <Typography variant="h6" fontWeight={700}>
              {image.title}
            </Typography>
            <Link to="/">
              {typeof image.url === 'string' ? (
                <img src={`/I/${image.url}`} className="img"
                  style={{
                    objectFit: 'contain',
                    maxHeight: 300,
                    minHeight: 300
                  }}
                />
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
                {`See more`}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
