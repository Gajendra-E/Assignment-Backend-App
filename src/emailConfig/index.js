var nodemailer = require('nodemailer');


module.exports = {
    // create reusable transport method (opens pool of SMTP connections)
    send_email: function(toAddress, name ) {  
       
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'gajendragaja141@gmail.com',
        pass: '*********'
    }
});

const mailOptions = {
    from: 'gajendragaja141@gmail.com', // sender address
    to:toAddress, // list of receivers
    subject: 'Full stack App Registration', // Subject line
    html: '<h1>You Have Successfully Register with Full stack App</h1>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
})

}
}
       

