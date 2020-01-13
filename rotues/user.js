var express = require('express');
var router = express.Router();
const UserServices = require('../services/user')

router.post('/signup', function (req, res) {
    UserServices.signup(req).then((response) => {
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: "Successfully Signed Up",
                result: response
            }
        )
    })
        .catch(err => {
            console.log("Errrrror", err)
            res.status(500).send(
                {
                    responseCode: 500,
                    responseMessage: "Not signed up",
                    result: err
                }
            )
        })
})
router.post('/login', function (req, res) {
    // console.log("aaaaaaaa",req,res)
    UserServices.login(req).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: "Successfully logged in",
                result: response

            }
        )
    }).catch((error) => {
        console.log("error ==>>>>", error)
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: "500 Error",
                result: response

            })
    });
});

module.exports = router;