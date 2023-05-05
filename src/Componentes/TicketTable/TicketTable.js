import React, { useEffect, useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate, Link } from 'react-router-dom';
import exportedObject from '../../Services/Common/TicketAPI';
import { StatusContext } from '../../Store/statusContext';

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



export default function CustomizedTables() {
  const navigate = useNavigate(); // obtém o objeto de navegação do React Router
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const context = useContext(StatusContext); //context para receber o filtro da tabela vinda da TopNavBar
  const status = context.statusNavBar


  const handleRowClick = (id) => {
    navigate(`/home/ticket/${id}`); // navega para a rota de detalhes do ticket com o ID correspondente
  };
  //recupera todos os ticktes
  async function getAllData() {

    await exportedObject.getTicket()
      .then((response) => {
        setData(response.data);
      }).catch((error) => {
        console.log(error);
        alert('nenhum registro encontrado! tente novamente mais tarde')
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    const filteredTickets = filterTickets(status);
    setFilteredData(filteredTickets);
  }, [status, data]);

  //filtrar de acordo com o status enviado pelo context da TopNavBar
  function filterTickets(status) {

    let filteredTickets = [...data];
    if (status === 'pendente') {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.Status === 'pendente'
      );
    } else if (status === 'em atendimento') {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.Status === 'em atendimento'
      );
    } else if (status === 'concluido') {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.Status === 'concluido'
      );
    } else {
      filteredTickets = [...data];
    }
    //filteredTickets.sort((a, b) => new Date(b.data_abertura) - new Date(a.data_abertura));
    return filteredTickets;
  }
  console.log('apos o filtro', filteredData)

  return (
    <div>
      <TableContainer >
        <Table sx={{ maxWidth: 1000 }} >
          <TableHead>
            <TableRow>
              <StyledTableCell>Assunto</StyledTableCell>
              <StyledTableCell align="right">Atribuido</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Data de Abertura</StyledTableCell>
              <StyledTableCell align="right">SLA</StyledTableCell>
              <StyledTableCell align="right">Cliente</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((ticket) => (
              <StyledTableRow key={ticket.id} onClick={() => handleRowClick(ticket.id)}>
                <StyledTableCell component="th" scope="row">
                  <Link to={`/home/ticket/${ticket.id}`}>{ticket.assunto}</Link>
                </StyledTableCell>
                <StyledTableCell align="right">Taylor Swift</StyledTableCell>
                <StyledTableCell align="right">
                  <span style={{ color: ticket.status === 'Pendente' ? 'blue' : ticket.status === 'em atendimento' ? 'orange' : ticket.status === 'concluido' ? 'green' : 'balck'}}>
                    {ticket.status}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">{ticket.data_abertura}</StyledTableCell>
                <StyledTableCell align="right">{ticket.sla}</StyledTableCell>
                <StyledTableCell align="right">{ticket.nome}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
