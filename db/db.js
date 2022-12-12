const Ticket=require('../models/Ticket');

class MyDB{
    constructor(){
        this.tickets=[];
    }

    //create new ticket

    /**
     * Create and Save new ticket
     * @param {string} username 
     * @param {*} price 
     * @returns {Ticket} returns a ticket object
     */
    create(username,price){
        const ticket=new Ticket(username,price);
        this.tickets.push(ticket);
        return ticket;

    }

    
    /**
     * Sell multiple tickets
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity 
     * @returns {Array<Ticket>}
     */

    bulkCreate(username,price,quantity){
       const result=[];
     for(let i=0;i<quantity;i++){
    const ticket=this.create(username,price);
    result.push(ticket);
    }   
     return result;
 }


 /**
  * returns all tickets
  */
    
    find(){
        return this.tickets;
    }

   /**
    * find ticket by ticketId
    * @param {string} ticketId 
    */
    
    findById(ticketId){
        const ticket=this.tickets.find(
            /**
             * 
             * @param {Ticket} ticket 
             * @returns 
             */
            (ticket)=>ticket.id===ticketId);
            return ticket;

    }
    /**
     * Find all tickets for a given user
     * @param {string} username
     * @returns {Array<Ticket>} 
     */

    findByUser(username){
        const tickets=this.tickets.filter(
            /**
             * {Ticket} ticket
             */
            (ticket)=>ticket.username===username
        )
        return tickets;

    }

    //update Ticket info

    /**
     * 
     * @param {string} ticketId 
     * @param {{username:string, price:number} } ticketBody 
     * @returns {Ticket}
     */
    

    updateById(ticketId,ticketBody){
        const ticket=this.findById(ticketId);
        ticket.username=ticketBody.username ?? ticket.username
        ticket.price=ticketBody.price ?? ticket.price
        ticket.updatedAt=new date();
        return ticket

    }

    //delete ticket from db
    /**
     * 
     * @param {string} ticketId 
     */

    deleteById(ticketId){
        const index=this.tickets.findIndex(
            (ticket)=>{ticket.id===ticketId}
        );

        if(index===-1){
            this.tickets.splice(index,1);
            return true;
        }
        else{
            return false;
        }

    }

    /**
     * 
     * @param {number} winnerCount 
     * @returns {Array<Ticket>} 
     */

    draw(winnerCount){
        let winnerIndexes=new Array(winnerCount);

        let index=0;
        while(index<winnerCount){
            let winnerIndex=Math.floor(Math.random()*this.tickets.length);
            console.log('winner index',winnerIndex)
            if(!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++]=winnerIndex;
                continue;
            }
        }

        const winners=winnerIndexes.map((index)=>this.tickets[index]);
        return winners;

    }
}

const myDB=new MyDB();
module.exports=myDB;