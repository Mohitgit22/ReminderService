const cron = require('node-cron');
const sender = require('../config/emailConfig');

const emailService = require('../services/email-service');
/**
 *  10:00 am
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent by now and is pending
 */


const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        // console.log('running a task every two minutes');
        // we will write our logic in this
        // logic should go in our services , therefore =====> go to services

        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
                sender.sendMail({ // we are not putting await here because we dont want to send email one by one. we wnat it simultaneously.
               // from: "ReminderService",
                to: email.recepientEmail,
                subject:email.subject,
                text:email.content
                },async(err, data) => {// this callback is the formatg of nodemailer , see in documentation
                    if(err){
                        console.log(err);
                    }else{
                        console.log("data", data);
                       const response = await emailService.updateTicket(email.id, {status: "SUCCESS"});
                       console.log( "response" ,response)
                    }
                });
        });
        console.log(response);
    });

}

module.exports = setupJobs;