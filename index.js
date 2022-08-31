var express = require('express')
var cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/connect')

var app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

const port = process.env.PORT || 3000

const start = () => {
  try {
    connectDB(process.env.MONGO_URI)
    app.listen(port, function () {
      console.log('Your app is listening on port ' + port)
    })
  } catch (error) {
    console.log(error)
  }
}

start()