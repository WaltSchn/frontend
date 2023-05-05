import React, { useContext } from 'react';
import './TopNavBar.css'
import { Button } from '@mui/material';
import { Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StatusContext } from '../../Store/statusContext';


const TopNavBar = () => {
   const context = useContext(StatusContext);
   //const { status, setStatus } = useContext(StatusContext);
   let status = null
   const onClickStatus = (status) => {
      //setStatus(status);

      context.statusNavBar = status;
      
      console.log('navbar status', status);
   };
   return (
      <Container className="header">
         <Row>
            <Link to='/home' >
               <Button variant="primary" onClick={() => onClickStatus('ALL')}><h4>Overview</h4></Button>
            </Link>
            <Link to='/home' >
               <Button variant="primary" onClick={() => onClickStatus('Pendente')} ><h4>Tickets Novos</h4></Button>
            </Link>
            <Link to='/home' >
               <Button variant="primary" onClick={() => onClickStatus("EM ATENDIMENTO")} ><h4>Tickets em atendimento</h4></Button>
            </Link >
            <Link to='/home'>
               <Button variant="primary" onClick={() => onClickStatus('CONCLUIDO')}><h4>Tickets Fechados</h4></Button>
            </Link>
         </Row>
      </Container>
   )
}
export default TopNavBar;
