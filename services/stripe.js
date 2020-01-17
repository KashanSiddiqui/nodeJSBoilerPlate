const Constant= require('../constants')
const stripePayment = require( '../utils/stripe')
const stripePay = async(req)=>{
    // console.log(req.body,"obj 222222")
    try{
        // console.log(req.body)
        // console.log(req.body.data)
        // console.log(req.body.email)
       const result= await stripePayment.createPayment(req.body)

        return [200, Constant.paymentSuccess,result];
        
    }
    catch(e){
        console.log(e);
        throw [404, Constant.paymentFailure,e];
    }
}

module.exports={
stripePay
}