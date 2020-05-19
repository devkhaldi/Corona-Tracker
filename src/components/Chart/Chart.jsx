import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
import axios from 'axios'

const apiUrl = 'https://covid19.mathdro.id/api/daily'

const Chart = ({ countryData = null }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => setDailyData(res.data))
      .catch(error => console.log(error))
  }, [])

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => new Date(reportDate).toDateString()),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed.total),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            label: 'Deaths',
            data: dailyData.map(({ deaths }) => deaths.total),
            borderColor: 'red',
            backgroundColor: '#cc2222',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const barChart = countryData.confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            data: [
              countryData.confirmed.value,
              countryData.recovered.value,
              countryData.deaths.value,
            ],
            backgroundColor: ['#22C', '#15A7A7', '#C22'],
          },
        ],
      }}
    />
  ) : null

  return (
    <div className={styles.container}>{barChart !== null ? barChart : lineChart}</div>
  )
}

export default Chart
