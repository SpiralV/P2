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

app.set('view engine', 'ejs')
app.use(express)
app.use(ejsLayouts)

app.get('/', (req, res) => {
    axios.get(``)
    .then((resReply) => {
        res.send(resReply)
    })
    .catch(err => {console.log(err)})
    })








app.listen(port, () => {
    console.log(`yes this is ${port}`)
})