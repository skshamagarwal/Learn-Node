var nm = require('nodemailer');
var transport = nm.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'sakshamag592@gmail.com',
        pass: '15052001'
    }
});

var mailOptions = {
    from: 'sakshamag592@gmail.com',
    to: 'sakshamag592@gmail.com',
    subject: 'My First Mail using node.',
    text: 'Hey! I am sending this email using node. Hope you like it.'
}

transport.sendMail(mailOptions, function(error, info) {
    if (error) {console.error(error)}
    else {console.log('Email Sent', info.response)}
})