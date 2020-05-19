import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import axios from 'axios'
import styles from './Cards.module.css'
import cx from 'classnames'

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
      .then(res =>
        setData({
          confirmed: res.data.confirmed,
          recovered: res.data.recovered,
          deaths: res.data.deaths,
          lastUpdate: res.data.lastUpdate,
        })
      )
      .catch(error => console.log(error))
  }, [])

  if (!data.confirmed.value) return 'Loading ...'
  const { confirmed, recovered, deaths, lastUpdate } = data
  return (
    <div className={styles.container}>
      {/* cards using bootstrap */}
      <div className='row mx-2'>
        <div className={cx(styles.infected, styles.card, 'col-md-4', 'col-sm-12', 'p-2')}>
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
        <div
          className={cx(styles.card, styles.recovered, 'col-md-4', 'col-sm-12', 'p-2')}>
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
        <div className={cx(styles.card, styles.deaths, 'col-md-4', 'col-sm-12', 'p-2')}>
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
    </div>
  )
}

export default Cards
