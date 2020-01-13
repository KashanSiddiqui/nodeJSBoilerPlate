var mongoose = require('mongoose')
var Schema = mongoose.Schema

var User = new Schema({
    name : {
            type:String,
            require : true
        },
    email : {   
        type : String,
        unique : true , 
        require : true
        },
    hash : {
        type : String,
        require : true
    }
}
)

     module.exports = mongoose.model('User', User )