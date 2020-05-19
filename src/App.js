import React, { useEffect, useState } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import axios from 'axios'
import logo from './img/logo.png'
import shape from './img/vector.svg'

const apiUrl = 'https://covid19.mathdro.id/api/countries'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('global')
  const [countryData, setCountryData] = useState({})

  useEffect(() => {
    if (selectedCountry !== 'global') {
      axios
        .get(`${apiUrl}/${selectedCountry}`)
        .then(res => setCountryData(res.data))
        .catch(error => console.log(error))
    }
  }, [selectedCountry])
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${shape})` }}>
      <header>
        <img src={logo} alt='Logo' />
      </header>
      <Cards />
      <CountryPicker setSelectedCountry={setSelectedCountry} />
      <Chart countryData={countryData} />
    </div>
  )
}

export default App
