const express = require('express')
const bodyParser = require('body-parser')

const user = require('./routes/user')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', user)
app.use('/', (req, res) => {
  res.send('<html><b>Signup API Frontpage</b></html>')
})

app.listen(PORT)
console.log(`app running port ${PORT}`)
