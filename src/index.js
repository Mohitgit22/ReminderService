const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// for scheduling the email
const jobs = require('./utils/job');

// const cron = require('node-cron');

const TicketController = require('./controllers/ticket-controller');

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))


    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, async () => {
        console.log(` server started at port ${PORT}`);
        jobs();
       
        

        // sendBasicEmail(
        //     'support@admin.com',//from
        //     'mohitsanketsingh23@gmail.com',//to
        //     'This is a testing email',//subject
        //     'Hey, how are you, I hope you like the support'//text
        // );

        // cron.schedule('*/1 * * * *', () => {
        //     console.log('running a task every two minutes');
        // });
    });
}

setupAndStartServer();