import React, { useContext, useEffect } from 'react';
import './TicketDetailsPedido.css';
import { PagamentoContext } from '../../Store/pagamentoContext';
import { EntregaContext } from '../../Store/entregaContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TicketDetailsPedido(props) {
    const { ticket } = props;
    const context = useContext(PagamentoContext);
    let buttonPagamento = null;

    const onClickPagamento = (buttonPagamento) => {
        context.pagamentoButton = buttonPagamento;
        console.log('ticketdetailpedido', context)
    }

    const contextEntrega = useContext(EntregaContext);
    let buttonEntrega = null;

    const onClickEntrega = (buttonEntrega) => {
        contextEntrega.entregaButton = buttonEntrega;
        console.log('ticketdetailENTREGA', contextEntrega)
    }

    return (
        <div className="ticket-pedidos-box">
            <div className='ticket-pedidos-box-header'>
                <h2>Detalhes Pedido</h2>
            </div>
            <div className='custom2'>
                <div className='row' >
                    <div>Status Pagamento: Aprovado</div>
                </div>
                <div className="row">
                    <div>NF:112233</div>
                </div>
                <div className="row">
                    <div>Status entregas: andamento</div>
                </div>
                <div className="row">
                    <div>Transportadorqa:Correios</div>
                </div>
                <div className="row">

                    <div>Data de entrega:01/01/2022</div>
                </div>
            </div>
            <div className="buttons-container2">
                < Link to={`/home/ticket/${ticket.id}`}>
                    <Button className="pagamento-button" type='submit' onClick={() => onClickPagamento('rotaPagamento')} >
                        Pagamento
                    </Button>
                </Link>
                < Link to={`/home/ticket/${ticket.id}`}>
                <Button className="entrega-button" type='submit' onClick={() => onClickEntrega('rotaEntrega')} >
                    Entrega
                </Button>
                </Link>
            </div>
        </div >
    );
}

export default TicketDetailsPedido;
