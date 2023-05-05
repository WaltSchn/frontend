import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TicketDetailsBox from '../../Componentes/DetalhesCliente/TicketDetailsBox';
import TicketDetailsPedido from '../../Componentes/DetalhesPedido/TicketDetailsPedido';
import './TicketDetails.css';
import exportedObject from '../../Services/Common/TicketAPI';
import TopNavBar from '../../Componentes/TopNavBar/TopNavBar';
import DetalhesPagamento from '../../Componentes/DetalhesPagamento/DetalhesPagamento';
import { PagamentoContext } from '../../Store/pagamentoContext';
import { EntregaContext } from '../../Store/entregaContext';
import DetalhesEntrega from '../../Componentes/DetalhesEntrega/DetalhesEntrega';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

//estilizacao da tabela
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,

    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));

const TicketDetails = () => {
  const { id } = useParams(); // Obtém o valor do parâmetro "id" da URL
  const [ticket, setTicket] = useState({});
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');


  const [data, setData] = useState([]);


  //recupera todos os ticktes
  async function getDataID() {

    await exportedObject.getTicketID(id)
      .then((response) => {
        setData(response.data)
        
      }).catch((error) => {
        console.log(error);
        alert('nenhum registro encontrado! tente novamente mais tarde')
      });
  };
  useEffect(() => {
    getDataID();
  }, []);

  

  //receber a requisicao para renderizar os detalhes pagamento
  const context = useContext(PagamentoContext);
  const pagamentoComponente = context.pagamentoButton
  console.log('PagamentoComponente', pagamentoComponente)

  //receber a requisicao para renderizar os detalhes entrega
  const entregaContext = useContext(EntregaContext);
  const entregaComponente = entregaContext.entregaButton;
  console.log('EntregaComponente',entregaComponente)

  useEffect(() => {
    async function fetchTicketAndMessages() {
      try {
        const [ticketResponse] = await Promise.all([
          exportedObject.getTicketID(id)
        ]);
        setTicket(ticketResponse.data);
      } catch (error) {
        console.error(error);
        alert('Nenhum registro encontrado! Tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTicketAndMessages();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>
  }


  const handleNewMessageSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await exportedObject.postMessage(id, newMessage);
      setMessage([...message, response.data.mensagem[0]]);
      setNewMessage('');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar mensagem! Tente novamente mais tarde.');
    }
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div>
      <div className='containerPrincipal'>
      <h1 className="title"> Cliente {data[0].nome} - id: {id}</h1>
      <TopNavBar />

      <div>
      <TableContainer >
        <Table sx={{ maxWidth: 1000 }} >
          <TableHead>
            <TableRow align="center">
            <StyledTableCell >ID</StyledTableCell>
             <StyledTableCell >Assunto</StyledTableCell>
              <StyledTableCell >Atribuido</StyledTableCell>
              <StyledTableCell >Status</StyledTableCell>
              <StyledTableCell >Data de Abertura</StyledTableCell>
              <StyledTableCell>SLA</StyledTableCell>
              <StyledTableCell>Cliente</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((ticket) => (
              <StyledTableRow align="center">
                <StyledTableCell component="th" scope="row">{ticket.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{ticket.assunto}</StyledTableCell>
                <StyledTableCell >Taylor Swift</StyledTableCell>
                <StyledTableCell >
                  <span style={{ color: ticket.status === 'Pendente' ? 'blue' : ticket.status === 'em atendimento' ? 'orange' : ticket.status === 'concluido' ? 'green' : 'balck'}}>
                    {ticket.status}
                  </span>
                </StyledTableCell>
                <StyledTableCell >{ticket.data_abertura}</StyledTableCell>
                <StyledTableCell >{ticket.sla}</StyledTableCell>
                <StyledTableCell >{ticket.nome}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ maxWidth: 1000 }} >
        <TableHead>
        <TableRow>
            <StyledTableCell align="center">Mensagem do cliente</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {data.map((ticket) => (
          <StyledTableRow>
            <StyledTableCell align="center">{ticket.mensagem_cliente}</StyledTableCell>
          </StyledTableRow>

        ))}
        </TableBody>
        </Table>
      </TableContainer>
    </div>

      <div>
        <form className="new-message-container" onSubmit={handleNewMessageSubmit}>
          <input type="text" value={newMessage} onChange={handleNewMessageChange} />
          <button type="submit">Enviar</button>
        </form>

        <TicketDetailsPedido ticket={ticket} />
      </div>

    </div>

    </div>

    
  );
}

export default TicketDetails;