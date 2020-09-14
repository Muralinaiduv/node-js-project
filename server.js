var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const morgan = require('morgan')
var port = process.env.PORT || 3000
var app = express()

require('dotenv').config()
require('./connect/connect')

app.use(morgan('dev'));


app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


var router = require('./routes/Books')

app.get('/', (req, res) => {
    res.send("murali")
})

app.use('/book', router)

app.listen(port, function() {
    console.log("server is running on port:" + port)
})