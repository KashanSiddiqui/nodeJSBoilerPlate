const express = require('express');
const app = express();
require('dotenv').config()
var router = express.Router();
const cors = require('cors');
const exphbs = require('express-handlebars');
const user = require('./rotues/user')
const test = require('./rotues/test')
const mail = require('./rotues/sendMail')
const stripe = require('./rotues/stripe')
app.use(express.json())
app.use(cors())
app.use(router)

app.use('/',user)
app.use('/test',test)
app.use('/mail',mail)
app.use('/stripe',stripe)

app.use((req,res) => {
    res.status(404).send({message : '404 Route not found'})
})

const port  = process.env.PORT || 4001;

app.listen(port)

console.log('Server running at port ' , port)
module.exports.app = app