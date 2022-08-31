var express = require('express')
var cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/connect')
const uploadFile = require('./controller/upload')

// import multer and config upload destination
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// no need to setup file for routing because there's only one post request
app.post('/api/fileanalyse', upload.single('upfile'), uploadFile)

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
