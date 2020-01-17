const Constant= require('../constants')
const sendMail = require( '../utils/nodemailer')
const sendInvoiceMail = async(req)=>{
    try{
        // console.log(req.body)
        // console.log(req.body.data)
        // console.log(req.body.email)
       const result= await sendMail.mailToCustomMail(req)

        return [200, Constant.emailSuccess,result];
        
    }
    catch(e){
        console.log(e);
        throw (e);
    }
}

module.exports={
sendInvoiceMail
}