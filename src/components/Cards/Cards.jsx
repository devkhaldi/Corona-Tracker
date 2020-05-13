import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = ({ data }) => {
  console.log(data)
  if (!data) return 'Loading ...'
  const { confirmed, deaths, recovered, lastUpdate } = data
  return (
    <div className={styles.container}>
      <Grid container spaicing={3} justify='center'>
        <Grid item component={Card}>
          <Typography color='textSecondary' gutterBottom>
            Infected
          </Typography>
          <Typography variant='h5'>{confirmed.value}</Typography>
          <Typography color='textSecondary'></Typography>
          <Typography varient='body2'>Number of active cases</Typography>
        </Grid>

        <Grid item component={Card}>
          <Typography color='textSecondary' gutterBottom>
            Infected
          </Typography>
          <Typography variant='h5'>Real data</Typography>
          <Typography color='textSecondary'>Real Date</Typography>
          <Typography varient='body2'>Number of recovered</Typography>
        </Grid>

        <Grid item component={Card}>
          <Typography color='textSecondary' gutterBottom>
            Infected
          </Typography>
          <Typography variant='h5'>Real data</Typography>
          <Typography color='textSecondary'>Real Date</Typography>
          <Typography varient='body2'>Number of deaths</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
