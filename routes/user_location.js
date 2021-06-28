const express = require('express')
const app = express()
const db = require('../models')

app.get('/', (req, res) => {
    res.render('user_location')
})
app.post('/', (req, res) => {
    let userIn = req.body.name
    // res.send('hello')
    res.render('user_location', { userName: userIn })
  })
module.exports = app