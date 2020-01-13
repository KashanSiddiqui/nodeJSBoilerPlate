const bcrypt = require('bcryptjs');
const db = require('../db')
const Test=db.test
const User = db.user


exports.addUser = async (req) => {
    try{
        const uniqueMail  = await User.findOne({email:req.body.email})
        console.log(uniqueMail)
        if(!uniqueMail){
            req.body.hash = bcrypt.hashSync(req.body.password, 8);
            delete req.body.password;
            console.log(req.body)
            const user = await User.create(req.body)
            const signupDetails = user
            return user
        }
        else {
            return "User Already Exist"
        }
    }
    catch(e){
        console.log(e)
        throw (e)

    }
}

exports.addTestData = async (req) => {
    try{
       
            const test = await Test.create(req.body)
        }
    catch(e){
        console.log(e)
        throw (e)

    }
}