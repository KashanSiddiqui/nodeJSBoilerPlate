const Constant= require('../constants')
const nodemailer = require('nodemailer');
const mailSend = require('./nodemailer');


let transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SENDER_EMAIL, // generated ethereal user
        pass: process.env.SENDER_EMAIL_PASSWORD// generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
});
// let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'adelbert97@ethereal.email', // generated ethereal user
//         pass: "nRt89TWbrVGqjDC9fk"// generated ethereal password
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

exports.sendInvoiceEmail = async (req) => {
    try {
        // const code = Math.floor(Math.random() * 1000000);
        // console.log("code==>", code);
        // console.log("sending mail", req.email);
        let info = await transporter.sendMail({
            from: 'Crypto Farm', // sender address
            to: req.email,//receiver email
            subject: 'Invoice of Payment', // Subject line
            html: '<h1>Welcome</h1><p>That was easy!</p>'
        })
        const mail = {
            info: info,
            
        };
        console.log("message checked=>", mail);
        return mail;
    }
    catch (e) {
        console.log("catching error in mail==>", e);
        throw [404, Constant.emailFailure];
    }
}




exports.mailToCustomMail = async (req) => {
    try {
        // console.log("data to mail=========>", certificate);
        // console.log("receiver mail=======>", participant);
        // await file.writeFile(certificate);
        await mailSend.sendInvoiceEmail(req);
        return true;
    }
    catch (e) {
        console.log("catching error in mail==>", e);
        throw [404, Constant.emailFailure];
    }
}