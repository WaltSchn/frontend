const express = require('express');
const TicketData = require('./src/Services/Common/DataTicket');
const MensagemTicket = require('./src/Services/Common/MensagemTicket')

const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.json(TicketData);
});

app.get('/api/:id', (req, res) => {
  const ticketId = req.params.id;
  const ticket = TicketData.find((ticket) => ticket.id === ticketId);
  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404).json({ message: `Ticket with ID ${ticketId} not found.` });
  } 
}); 

app.get('/api/mensagem/:id', (req, res) => {
  const mensagemId = req.params.id;
  const mensagem = MensagemTicket.find((mensagem) => mensagem.id === mensagemId);
  if (mensagem) {
    res.json(mensagem);
  } else {
    res.status(404).json({ message: `Ticket with ID ${mensagemId} not found.` });
  }
});

app.post('/api/mensagem/:id', (req, res) => {
  const mensagemId = req.params.id;
  const mensagem = MensagemTicket.find((mensagem) => mensagem.id === mensagemId);
  if (mensagem) {
    mensagem.Mensagem.push(req.body.Mensagem);
    res.json(mensagem);
  } else {
    res.status(404).json({ message: `Ticket with ID ${mensagemId} not found.` });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});