var express = require('express');
var router = express.Router();
const Test = require('../services/test')
const checkAuth=require("../utils/jwt-Auth");
const jwt = require('jsonwebtoken');
router.post('/addData', function (req, res) {
    Test.addTestData(req).then((response) => {
        res.status(201).send(
            {
                responseCode: 201,

                responseMessage: "Successfully added Data",
                result: response
            }
        )
    })
        .catch(err => {
            console.log("Errrrror", err)
            res.status(500).send(
                {
                    responseCode: 500,
                    responseMessage: "Error in adding test data",
                    result: err
                }
            )
        })
})





router.post('/getData',checkAuth, function (req, res) {
    // console.log(req,"insideeeeeeeeeee")
    Test.getTestData(req).then((response) => {
        res.status(201).send(
            {
                responseCode: 201,

                responseMessage: "Successfully fetched Data",
                result: response
            }
        )
    })
        .catch(err => {
            console.log("Errrrror", err)
            res.status(500).send(
                {
                    responseCode: 500,
                    responseMessage: "Error in getting test data",
                    result: err
                }
            )
        })

    
})
// router.post('/getData',checkAuth, function (req, res) {
//     jwt.verify(req.token, "Secret", (err, authorizedData) => {
//         if(err){
//             //If error send Forbidden (403)
//             console.log('ERROR: Could not connect to the protected route');
//             res.sendStatus(403);
//         } else {
//             //If token is successfully verified, we can send the autorized data 
//             Test.getTestData(req).then((response) => {
//                 res.status(201).send(
//                     {
//                         responseCode: 201,
        
//                         responseMessage: "Successfully fetched Data",
//                         result: response
//                     }
//                 )
//             })
//                 .catch(err => {
//                     console.log("Errrrror", err)
//                     res.status(500).send(
//                         {
//                             responseCode: 500,
//                             responseMessage: "Error in adding test data",
//                             result: err
//                         }
//                     )
//                 })
//         }
//     })

    
// })



module.exports = router;