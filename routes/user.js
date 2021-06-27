const express = require('express')
const app = express()
const db = require('../models')

app.get('/', (req, res) => {
    res.render('user')
})

app.post('/', async(req, res) => {
    let name = req.body.name
  db.user.findOrCreate({
    where: {
      name: name
    }
  (res.redirect('user', { userName: name }))
  }) 
})

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