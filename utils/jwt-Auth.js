const jwt = require('jsonwebtoken');
var express = require('express');
module.exports =(req,res,next)=>{



    console.log(req.body,"Middleware",req.headers)
    console.log(req.body,"Middleware",req.headers)
    const header = req.headers['authorization'];
    console.log(header)
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        console.log(token)
        req.token = token;
        jwt.verify(token, process.env.SECRET, (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            next() 
            
        }
    })
            
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}


// module.exports =(req,res,next)=>{
//     console.log(req.body,"Middleware",req.headers)
// try{
    
//     const token=req.headers.authorization.split(" ")[1];
//     const decode=jwt.verify(token,"Secret", function(err, decoded) {
//         // err
//         // decoded undefined
//         console.log(decoded,"dddddddddddddd")
//     })
//     req.authVerification=decode;
//     next()    

// }
// catch(error){
//     return res.status(401).json({
//         message:'Authentication Failed'
//     })
// }
// }





// module.exports =(req,res,next)=>{


//     console.log(req.body,"Middleware",req.headers)
//     const header = req.headers['authorization'];
//     console.log(header)
//     if(typeof header !== 'undefined') {
//         const bearer = header.split(' ');
//         const token = bearer[1];
//         console.log(token)
//         req.token = token;
//         next()
//     } else {
//         //If header is undefined return Forbidden (403)
//         res.sendStatus(403)
//     }
// }


