const express = require('express')
const fetch = require('node-fetch')
const app = express()
const db = require('../models')
require('dotenv').config()

app.get('/', (req, res) => {
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null
    })
})

app.post('/', async (req, res) => {
    const city = req.body.city
    const url_api = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENKEY}`

    try {
    await fetch(url_api)
    .then(res => res.json())
    .then(data => {
    if (data.message === 'city not found') {
      res.render('location', {
        city: data.message,
        des: null,
        icon: null,
        temp: null
      })
    } else {
      const city = data.name;
      const des = data.weather[0].description;
      const icon = data.weather[0].icon;
      const temp = data.main.temp;
    
      res.render('location', {
        city, des, icon, temp
      })
    }
  })
    
  } catch (err) {
    res.render('location', {
      city: 'something wrong',
      des: null,
      icon: null,
      temp: null
    })
  }
})

module.exports = app