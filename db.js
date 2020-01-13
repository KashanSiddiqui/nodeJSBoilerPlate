const config = require('./config.json')
const mongoose  = require('mongoose')
mongoose.connect(config.connectionString , {useCreateIndex : true , useNewUrlParser: true ,  useUnifiedTopology: true })
.then(()=>{
    console.log('connected')
})
.catch(()=>{
    console.log('Not Connected')
})

module.exports = {
    user : require('./models/user'),
    test : require('./models/test')

}