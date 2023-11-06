const { NotificationTicket } = require('../models/index');
// const notificationticket = require('../models/notificationticket');
const { Op } = require("sequelize");

class TicketRepository {

    
    async getAll() {
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }


    async create( data ) {
        try {
            console.log(" repo create mein hai");
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(" repo create mein error hai")
            throw error;
        }
    }

    async get(filter) {
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status: filter.status,// rather than pending use filter.status
                    notificationTime: {
                        [Op.lte]: new Date(), 
                    }
                }
            });
            // console.log(tickets)
            return tickets;
        } catch (error) {
            console.log(" repo create mein error hai")
            throw error;
        }
    }

    async update(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status)// if status is there , then we will update the status
              ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log(" repo update mein error hai")
            throw error;
        }
    }


}

module.exports = TicketRepository;


// for operators , refer url: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/