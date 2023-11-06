const TicketService = require('../services/email-service');

const create = async ( req, res) => {
    try {
        console.log(" controller create mein hai")
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully registered an email reminder'
        });
    } catch (error) {
        console.log(" controller create mein error hai")
        return res.status(500).json({
            success: false,
            data: response,
            err: {},
            message: 'unable  to register an email reminder'
        });
    }
}

module.exports = {
    create,
}