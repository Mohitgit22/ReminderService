const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailfrom, mailTo, mailSubject, mailBody) => {
    try {
        const  response = await sender.sendMail({
        from: mailfrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
      });
      //console.log(response);
    } catch (error) {
        console.log("something wrong while sending email");
        console.log(error);
    }
     
}

module.exports = {
    sendBasicEmail
}


/**
 * SMTP -> a@b.com
 * receiver -> d@e.com
 * 
 * from: support@noti.com
 * 
 */
