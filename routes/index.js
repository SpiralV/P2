const express = require('express')
const fetch = require('node-fetch')
const app = express()
const db = require('../models')
require('dotenv').config()

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const city = req.body.city

    const url_api = `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${process.env.OPENKEY}`

    fetch(url_api)
        .then(res => res.json())
        .then(data => console.log(data))
})

module.exports = app