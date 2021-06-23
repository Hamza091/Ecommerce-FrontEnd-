const express = require('express')
const Data = require('./Routes/GetData')
const cors = require('cors')
var bodyParser = require('body-parser')

var app = express()
var jsonParser = bodyParser.json()
app.use(cors())
// console.log('hellow')
app.use('/api',jsonParser,Data)


app.listen(8888)

