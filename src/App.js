import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

const apiUrl = 'https://covid19.mathdro.id/api'

function App() {
  const [data, setData] = useState({
    confirmed: {},
    recovered: {},
    deaths: {},
    lastUpdate: {},
  })
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(({ data: { confirmed, recovered, deaths, lastUpdate } }) =>
        setData({ confirmed, recovered, deaths, lastUpdate })
      )
      .catch(error => console.log(error))
  }, [])
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  )
}

export default App
