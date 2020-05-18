import React, { useState, useEffect } from 'react'
import axios from 'axios'
import cx from 'classnames'
import styles from './CountryPicker.module.css'

const apiUrl = 'https://covid19.mathdro.id/api/countries'

const CountryPicker = ({ setSelectedCountry }) => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('Global')
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => setCountries(res.data.countries))
      .catch(error => console.log(error))
  }, [country])

  const handelChange = e => {
    setSelectedCountry(e.target.value)
    setCountry(e.target.value)
  }
  return (
    <form className={cx(styles.container, 'my-3')}>
      <select onChange={handelChange} value='global' className='form-control'>
        <option value={country}>{country}</option>
        {countries.map(country => (
          <option key={country.iso3} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </form>
  )
}

export default CountryPicker
