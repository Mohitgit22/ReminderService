const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// for scheduling the email
const cron = require('node-cron');

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
     const app = express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}))

    app.listen( PORT , () => {
        console.log(` server started at port ${PORT}`);


        // sendBasicEmail(
        //     'support@admin.com',//from
        //     'mohitsanketsingh23@gmail.com',//to
        //     'This is a testing email',//subject
        //     'Hey, how are you, I hope you like the support'//text
        // );

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every two minutes');
        });
    });
}

setupAndStartServer();