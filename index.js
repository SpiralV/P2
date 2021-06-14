// import express
const express = require('express')
const app = express()
// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')
require('dotenv').config()
const port = 39933
app.set('view engine', 'ejs')
const db = require('./models/')
app.use(express.static('public'))
// // define API key var
// const openkey = process.env.OPENKEY
// // declare an instance of app
// const methodOverride = require('method-override')
// app.use(express.static(__dirname + '/public'))
// app.use(express.urlencoded({ extended: false }))
// app.use(methodOverride('_method'))
// app.use(express)
// app.use(ejsLayouts)
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))
app.use('/location', require('./routes/location'))
app.use('/user_location', require('./routes/user_location'))

app.listen(port, () => {
    console.log(`yes this is ${port}`)
})

module.exports = app