const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./postgresquery');
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

var server = app.listen(3000, function () {  
    var host = server.address().address;  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port);  
  });  