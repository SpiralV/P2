// import express
const express = require('express')
// import axios
const axios = require('axios')
// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')
require('dotenv').config()
const port = 3000
// define API key var
const openkey = process.env.OPENKEY
// declare an instance of app
const app = express()

app.use(express)
app.use(ejsLayouts)
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})







app.listen(port, () => {
    console.log(`yes this is ${port}`)
})