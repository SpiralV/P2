require('dotenv').config()
// import express
const express = require('express')
const app = express()
// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')
const { sequelize } = require('./models/')
require('dotenv').config()
const PORT = 3963
app.set('view engine', 'ejs')
const db = require('./models/')
// const fetch = require('node-fetch')
const axios = require('axios')
const openkey = process.env.OPENKEY
// const methodOverride = require('method-override')
6
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
// app.use(methodOverride('_method'))
app.use(ejsLayouts)
// routes below
// app.use('/', require('./routes/other'))
app.use('/location', require('./routes/location'))
app.use('/user', require('./routes/user'))
app.use('/user_location', require('./routes/user_location'))

//user stays logged in via localstorage
//get user name from field
//find or create user name within user DB
// app.post('/users', async(req, res) => {
//     let name = req.body.name
//   db.user.findOrCreate({
//     where: {
//       name: name
//     }
//   }) 

  
  
//   try {
//     let user = await db.users.create(name)
//     res.send('user matthew here')
//     console.log(name)
//   } catch(err)
//   {
//     return res.status(500).json(err)
//   }
// })
  //app.put /user_location
//update name within DB 

// app.put('/user_location', async(req, res) => {

// })

//app.get /user_location
//identify current user (via id)
//list user locations tied to user id
//render user and locations

// app.get('/user_location', async(req, res) => {

// })

//app.delete /user_location
//delete user location from user listen

// app.delete ('/user_location', async(req, res) => {

// })

//app.post /
//after location is entered, if user is logged in display save location button
//create the id that is the location id tied to the user id 

// app.post ('/', async(req, res) => {

// })

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
    await db.location.findOrCreate({
      where: {city: city}})
      await db.user_location.findOrCreate({
        where: {city: city}
      })
    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENKEY}`
    try {
    await axios.get(newUrl)
    .then(data => {
        
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
       des, icon, temp, city
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


app.listen(process.env.PORT,  () => {
    console.log(`yes this is ${PORT}}`)
})

module.exports = app