// import express
const express = require('express')
// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')
require('dotenv').config()
const port = 3000
const db = require('./models/')
// define API key var
const openkey = process.env.OPENKEY
// declare an instance of app
const app = express()
const methodOverride = require('method-override')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express)
app.use(ejsLayouts)
app.set('view engine', 'ejs')
app.use('/user', require('./routes/user'))
app.use('/location', require('./routes/location'))
app.use('/user_location', require('./routes/user_location'))
app.get('/', (req, res) => {
    res.render('index')
})







app.listen(port, () => {
    console.log(`yes this is ${port}`)
})

module.exports = app