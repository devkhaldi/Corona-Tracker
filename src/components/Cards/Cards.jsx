import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { fetchData } from '../../api'
import axios from 'axios'
import styles from './Cards.module.css'

const apiUrl = 'https://covid19.mathdro.id/api'

const Cards = () => {
  const [data, setData] = useState({
    confirmed: {},
    recovered: {},
    deaths: {},
    lastUpdate: {},
  })
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  if (!confirmed.value) return 'Loading ...'
  return (
    <div className={styles.container}>
      {/* cards using bootstrap */}
      <div className='row'>
        <div className='card col-4'>
          <div className='card-body'>
            <h5 className='card-title'>Infected</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              <CountUp start={0} end={confirmed.value} duration={1.5} separator=',' />
            </h6>
            <h6 className='card-subtitle mb-2 text-muted'>
              {new Date(lastUpdate).toDateString()}
            </h6>
            <p className='card-text'>Number of active cases of COVID19</p>
          </div>
        </div>
        <div className='card col-4'>
          <div className='card-body'>
            <h5 className='card-title'>Recovered</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              <CountUp start={0} end={recovered.value} duration={1.5} separator=',' />
            </h6>
            <h6 className='card-subtitle mb-2 text-muted'>
              {new Date(lastUpdate).toDateString()}
            </h6>
            <p className='card-text'>Number of recovered cases</p>
          </div>
        </div>
        <div className='card col-4'>
          <div className='card-body'>
            <h5 className='card-title'>Deaths</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              <CountUp start={0} end={deaths.value} duration={1.5} separator=',' />
            </h6>
            <h6 className='card-subtitle mb-2 text-muted'>
              {new Date(lastUpdate).toDateString()}
            </h6>
            <p className='card-text'>Number of deaths</p>
          </div>
        </div>
      </div>

      {/* <Grid container spaicing={3} justify='center'>
        <Grid item component={Card}>
          <Typography color='textSecondary' gutterBottom>
            Infected
          </Typography>
          <Typography variant='h5'>
            <CountUp start={0} end={confirmed.value} duration={1.5} separator=',' />
          </Typography>
          <Typography color='textSecondary'>REAL DATE</Typography>
          <Typography varient='body2'>Number of active cases of COVID-19</Typography>
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
      </Grid> */}
    </div>
  )
}

export default Cards
