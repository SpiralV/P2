const express = require('express')
const app = express()
const db = require('../models')

app.get('/', (req, res) => {
    res.render('user')
})

// app.post('/', (req, res) => {
//   let name = req.body.name
//  db.user.findOrCreate({
//   where: {name: name}})
// res.render('user', { userName: name })
//  })

// app.post('/user_location', (req, res) => {
//   let userIn = req.body.name
//   res.send('hello')
//   // res.render('user_location', { userName: userIn })
// })
// app.post('/', async(req, res) => {
//     let name = req.body.name
//   await db.user.findOrCreate({
//     where: {
//       name: name
//     }.then(
//   (res.redirect({ status: 200 }, 'user', { userName: name } ))
//   )}).catch(err => console.log(err))
// })

// app.get('/', (req, res) => {
//   let name = req.query.user

//   db.user.findAll({
//     where: {
//       userName: name
//     }
//   }).then((response) => {
//     let idno = response[0].dataValues.userid
//     res.render('user', { userid: idno })
//   })
// })

  
//   try {
//     let user = await db.users.create(name)
//     res.send('user matthew here')
//     console.log(name)
//   } catch(err)
//   {
//     return res.status(500).json(err)
//   }


module.exports = app