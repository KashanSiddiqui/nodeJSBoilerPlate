var express = require('express');
var router = express.Router();
const stripeConnection = require('../services/stripe') 
router.post('/', function (req, res) {
    
    // console.log(req,"req in routersssssssssssssssssss")
    // console.log(req.body,"obj 111111111")
    stripeConnection.stripePay(req).then((response) => {
        //SUCCESS
        res.status(response[0]).send(
            {
                responseCode: response[0],
                responseMessage: response[1],
                result: response[2]
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(404).send(
            {
                responseCode: error[0],
                responseMessage: error[1],
                result: error[2]
            }
        )
    });
});
module.exports = router;