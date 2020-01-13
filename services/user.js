const bcrypt = require('bcryptjs');
const config = require('../config.json')
const insert = require('../db_functions/insert')
const read = require('../db_functions/read')
const remove = require('../db_functions/delete')
const update = require('../db_functions/update')
const jwt = require('jsonwebtoken');
 
const signup = async (req)=>{
    try{
                const addUser = await insert.addUser(req);
                return addUser
    }
    catch(e){
        console.log(e)
        throw (e)
    }
}
const login = async (req) => {
    try{
            // console.log(req.body)
            

            const getUser = await read.getUserLogin(req)
            if (!bcrypt.compareSync(req.body.password, getUser.hash)) return "Wrong Password";
            const token = jwt.sign({ email: getUser.email }, process.env.SECRET,{ expiresIn: '1h' });
            const user={
                getUser,
                token
            }
            return user
    }
    catch (e) {
        console.log(e)
        throw new Error(e)
    }
}
module.exports ={
    login , 
    signup
}