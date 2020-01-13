

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Test = new Schema({
    testData : {
            type:String,
            require : true
        }
}
)

     module.exports = mongoose.model('Test', Test )