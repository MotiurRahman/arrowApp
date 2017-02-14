var Arrow = require('arrow');

var nodemailer = require('nodemailer');



var contact_post = Arrow.Router.extend({
    name: 'contact_post',
    path: '/contact',
    method: 'POST',
    description: 'This is contact web routes',
    action: function(req, resp) {
        /**
         * by default, routes are sync. to make them async, add a next in the action above as
         * the last parameter and then call next when completed
         */

        var email = req.body.email;
        var subject = req.body.subject;
        var message = req.body.message;

        console.log("email:" + email);
        console.log("subject:" + subject);
        console.log("message:" + message);


        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'motiur.mbstu@gmail.com',
                pass: 'rjvonzaqbapiggef'
            }
        });


        // var transporter = nodemailer.createTransport('smtps://motiur.mbstu@gmail.com:rjvonzaqbapiggef@smtp.gmail.com');

        // setup e-mail data with unicode symbols 
        var mailOptions = {
            from: email, // sender address 
            to: 'motiur.mbstu@gmail.com', // list of receivers 
            subject: subject, // Subject line 
            text: message+'\n'+email, // plaintext body 

        };

        // send mail with defined transport object 
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            }
            console.log('Message sent: ' + info.response);
           
        });

         resp.redirect('/contact');



    }
});

module.exports = contact_post;
