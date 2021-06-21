const express = require('express')
const app = express()
const db = require('../models')

app.get('/', (req, res) => {
    res.render('user')
})

module.exports = app