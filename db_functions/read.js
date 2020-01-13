const db = require('../db')
const User = db.user
const Test = db.test


exports.getUserLogin = async (req) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email })
        if (!emailExist) {
            return "User Doesnot Exist"
        }
        return emailExist
    }
    catch (e) {
        throw (e)
    }
}

exports.getTestData = async (req) => {
    try {
        const dataExist = await Test.findOne({ testData: req.body.data })
        if (!dataExist) {
            return "User Doesnot Exist"
        }
        return dataExist
    }
    catch (e) {
        throw (e)
    }
}