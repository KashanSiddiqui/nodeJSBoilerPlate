var express = require('express');
var router = express.Router();
const sendMail = require('../services/sendMail') 
router.post('/sendInvoiceMail', function (req, res) {
    
    console.log(req,"req in routersssssssssssssssssss")
    sendMail.sendInvoiceMail(req).then((response) => {
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
                responseMessage: error[1]
            }
        )
    });
});
module.exports = router;