/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

// Get list of things
exports.index = function(req, res) {

// listen for token updates (if refreshToken is set)
// you probably want to store these to a db
    // generator.on('token', function(token){
    //     console.log('New token for %s: %s', token.user, token.accessToken);
    // });

    // login
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: 'acethecfanow@gmail.com',
                clientId: '1014266356222-he3d5jepc17sduh1uu4bhg41vfdf0otv.apps.googleusercontent.com',
                clientSecret: 'zCcB2LZXyxR7n64F8RdSXe89',
                refreshToken: '1/Rsx-E6tZYwS8unLezXfvH1TqVxVwzSNZtKwbLSG9UlI'
                // accessToken: '{cached access token}'
            })
        }
    });

    var mailOptions = {
        from: '"Ace The CFA" <acethecfanow@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: '25 Sample Questions', // Subject line
        text: '', // plaintext body
        html: '<!DOCTYPE html><title>A Responsive Email Template</title><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><meta http-equiv=X-UA-Compatible content="IE=edge"><style type=text/css>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0;mso-table-rspace:0}img{-ms-interpolation-mode:bicubic}img{border:0;height:auto;line-height:100%;outline:0;text-decoration:none}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.logo img{margin:0 auto!important}.mobile-hide{display:none!important}.img-max{max-width:100%!important;width:100%!important;height:auto!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.padding-meta{padding:30px 5% 0 5%!important;text-align:center}.padding-copy{padding:10px 5% 10px 5%!important;text-align:center}.no-padding{padding:0!important}.section-padding{padding:50px 15px 50px 15px!important}.mobile-button-container{margin:0 auto;width:100%!important}.mobile-button{padding:15px!important;border:0!important;font-size:16px!important;display:block!important}}div[style*="margin: 16px 0;"]{margin:0!important}</style><!--[if gte mso 12]><style type=text/css>.mso-right{padding-left:20px}</style><![endif]--><body style=margin:0!important;padding:0!important><div style=display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden>Your FREE 25 Question Download link is attatched, ensure you pass your 2016 exam by studying hard...</div><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td style="background:#00b05d;background:linear-gradient(45deg,#162A72 0,#1E659C 40%,#1FA7AB 100%);background:-moz-linear-gradient(45deg,#162A72 0,#1E659C 40%,#1FA7AB 100%);background:-webkit-linear-gradient(45deg,#162A72 0,#1E659C 40%,#1FA7AB 100%)" align=center><!--[if (gte mso 9)|(IE)]><table align=center border=0 cellspacing=0 cellpadding=0 width=500><tr><td align=center valign=top width=500><![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:500px class=wrapper><tr><td align=center valign=top style="padding:15px 0" class=logo><a href=http://www.acethecfa.com/ target=_blank><img alt=Logo src=http://www.acethecfa.com/assets/images/7f390127.cfalogo.png width=60 style=display:block;font-family:Helvetica,Arial,sans-serif;color:#fff;font-size:16px border=0></a></table><!--[if (gte mso 9)|(IE)]><![endif]--><tr><td bgcolor=#FFF align=center style="padding:70px 15px 70px 15px" class=section-padding><!--[if (gte mso 9)|(IE)]><table align=center border=0 cellspacing=0 cellpadding=0 width=500><tr><td align=center valign=top width=500><![endif]--><table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:500px class=responsive-table><tr><td><table width=100% border=0 cellspacing=0 cellpadding=0><tr><td align=center class=padding><a href=http://www.acethecfa.com target=_blank><img src=http://www.acethecfa.com/assets/images/bae3d5b0.second-row.jpg width=350 border=0 alt="Insert alt text here" style=display:block;padding:0;color:#266e9c;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px class=img-max></a><tr><td><table width=100% border=0 cellspacing=0 cellpadding=0><tr><td align=center style=font-size:26px;font-family:Helvetica,Arial,sans-serif;color:#266e9c;padding-top:15px class=padding-copy>Congratulations! Goodluck with your Exam<tr><td align=center style=font-size:16px;font-family:Helvetica,Arial,sans-serif;color:#333;padding-top:15px;opacity:.8;text-align:left class=padding-copy>Being once in your shoes, we know the struggle. Every resource counts. Click the button below to be taken to our download page for your pdf questions. You can also paste the link below into your browser.<br><br>Don\'t forget Acethecfa has a huge bank of questions we sell for a very reasonable fee. Get an edge over your competitors and ensure you pass your exam.<tr><td align=center><table width=100% border=0 cellspacing=0 cellpadding=0><tr><td align=center style=padding-top:25px class=padding><table border=0 cellspacing=0 cellpadding=0 class=mobile-button-container><tr><td align=center style=border-radius:3px bgcolor=#256F9C><a href=http://www.acethecfa.com/download?dl=mbvMh7l5NtIB8f4 target=_blank style="font-size:16px;font-family:Helvetica,Arial,sans-serif;color:#fff;text-decoration:none;color:#fff;text-decoration:none;border-radius:3px;padding:15px 25px;border:1px solid #256F9C;display:inline-block" class=mobile-button>Download My 25 FREE Questions Here &rarr;</a><tr><td align=center style=font-size:12px;opacity:.5;font-family:Helvetica,Arial,sans-serif;color:#333;padding-top:15px;text-align:left class=padding-copy>Or simply paste this link into your browser http://www.acethecfa.com/download?dl=mbvMh7l5NtIB8f4</table></table></table></table></table><!--[if (gte mso 9)|(IE)]><![endif]--></table>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.sendStatus(200)
    });


};