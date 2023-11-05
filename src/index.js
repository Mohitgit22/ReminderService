const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
     const app = express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}))

    app.listen( PORT , () => {
        console.log(` server started at port ${PORT}`);


        sendBasicEmail(
            'support@admin.com',//from
            'mohitsanket23@gmail.com',//to
            'This is a testing email',//subject
            'Hey, how are you, I hope you like the support'//text
        );
    });
}

setupAndStartServer();