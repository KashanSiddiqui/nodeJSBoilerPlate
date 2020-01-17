const Constant= require('../constants')
const stripe = require('stripe')(process.env.STRIPE_KEY); //will be replaced by my key afterward
exports.createPayment = async (obj) => {
    // console.log(obj,"objjjjjjjjj")
    try {

        let charge = await stripe.charges.create({
            amount: obj.amount,
            currency: obj.currency,
            source: obj.source,
            // description: obj.description
        })
        console.log(charge.id,"iddd") //payment ID
        return charge
    } catch (error) {
        // console.log(e)
        throw [404, Constant.paymentFailure,error.message];
    }
}
// const obj = {
//        amount: "100", //this means 1 dollar
//        currency: "USD",
//        source: "tok_visa"
//      }