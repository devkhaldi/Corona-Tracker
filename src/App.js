import React, { useEffect, useState } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import axios from 'axios'

const apiUrl = 'https://covid19.mathdro.id/api/countries'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('global')
  const [countryData, setCountryData] = useState({})

  useEffect(() => {
    if (selectedCountry !== 'global') {
      console.log(selectedCountry)
      axios
        .get(`${apiUrl}/${selectedCountry}`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  }, [selectedCountry])
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker setSelectedCountry={setSelectedCountry} />
      <Chart countryData={countryData} />
    </div>
  )
}

export default App
