const express = require('express')
const app = express()
const db = require('../models')

app.get('/', (req, res) => {
    res.render('user_location')
})
app.post('/', (req, res) => {
    let userIn = req.body.name
    db.user.findOrCreate({
      where: {name: userIn}})
    res.render('user_location', { userName: userIn })
  })

app.put('/', (req, res) => {
  let userIn = req.body.name
  console.log(userIn)
  db.user.update({
    where: {name: userIn}})
    res.render('user_location', { userName: userIn })
  })


module.exports = app
