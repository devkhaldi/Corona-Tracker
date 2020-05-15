import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  )
}

export default App
