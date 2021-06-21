require('dotenv').config()
// import express
const express = require('express')
const app = express()
// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')
const { sequelize } = require('./models/')
const port = 39933
const db = require('./models/')
// const fetch = require('node-fetch')
const axios = require('axios')
const openkey = process.env.OPENKEY
// const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
// app.use(methodOverride('_method'))
app.use(ejsLayouts)
// routes below
// app.use('/', require('./routes/other'))
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

 app.get('/', (req, res) => {
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null
    })
})

// app.post('/', async (req, res) => {
//   const city = req.body.city


// })
app.post('/', async (req, res) => {
    const city = req.body.city
    console.log(city)
    // const urlapi = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=da7e7c74ccff8b7ee78ac3b5d3da8425`
    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENKEY}`
    try {
    await axios.get(newUrl)
    // .then(resp => {
    //     if(resp){
    //         console.log(resp.data)
    //     }else{
    //         console.log("no")
    //     }
    //     })
    .then(data => {
        console.log(data.data)
    if (data.data.cod === 404) {
      res.render('index', {
        // city: data.cod,
        des: null,
        icon: null,
        temp: null
      })
    } else {
      const city = data.data.name;
      const des = data.data.weather[0].description;
      const icon = data.data.weather[0].icon;
      const temp = data.data.main.temp;
    
      res.render('index', {
        city, des, icon, temp
      })
    }
  })
    
  } catch (err) {
      console.log(err)
    res.render('index', {
      city: 'City not found.',
      des: null,
      icon: null,
      temp: null
    })
  }
})


app.listen(port,  () => {
    console.log(`yes this is ${port}`)
})

module.exports = app