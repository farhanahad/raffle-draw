Requirements
- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can buy multiple tickets at a time)
- raffle draw


Ticket Model
- number (unique)
- username
- price
- timestamp

All Routes

- /tickets/t/:ticketId GET - find single ticket
- /tickets/t/:ticketId PATCH - update ticket by id
- /tickets/t/:ticketId DELETE - delete ticket by id
- /tickets/u/:username GET - find tickets for a given user
- /tickets/sell - create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw - find winners
- /tickets/ - find all tickets