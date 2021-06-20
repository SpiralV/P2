require('dotenv').config()
// import express
const express = require('express')
const app = express()
// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')
const { sequelize } = require('./models/')
const port = 39933
const db = require('./models/')
const openkey = process.env.OPENKEY
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// // define API key var
// // declare an instance of app
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))
app.use(express)
app.use(ejsLayouts)
// routes below
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))
app.use('/location', require('./routes/location'))
app.use('/user_location', require('./routes/user_location'))

app.post('/users', async(req, res) => {
    const { name } = req.body

    try {
       const user = await users.create({ name })
       return res.json(user)
    } catch(err)
 {
     return res.status(500).json(err)
 }})

app.listen(port,  () => {
    console.log(`yes this is ${port}`)
})

module.exports = app