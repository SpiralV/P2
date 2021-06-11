const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
let db = require("./models")
let rowdy = require('rowdy-logger')
app.set('view engine', 'ejs')
app.use(ejsLayouts)
rowdy.begin(app)
app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => {
    console.log("please help me")

    let aJSMessage = "i am testing"
    res.render('index', { aJSMessage })
})

app.get('/weder')

app.listen(3999)