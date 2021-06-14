const express = require('express')
const app = express()
const db = require('../models')

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app