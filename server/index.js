const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const db = require('./auth')
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/getUsers', db.getUsers)
app.get('/getUsersByEmail/:email', db.getUsersByEmail)
app.post('/login', db.loginUser)
app.post('/createUsers', db.createUsers)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
