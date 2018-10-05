require('dotenv').config()
const express = require ('express')
const bodyParser = require('body-parser');
const controller = require('./controller')
const massive = require('massive')

const port = process.env.SERVER_PORT
const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_CODE)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log("Have no fear; DB is here")
})

app.get('/api/get_houses', controller.get_houses)

app.post('/api/add_home', controller.add_home)

app.delete('/api/delete_house/:id', controller.delete_house)

app.listen(port, () => console.log(`Docked and ready at port ${port}`))