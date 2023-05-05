import React, { useContext, useEffect } from 'react';
import './DetalhesEntrega.css';
import { Button } from 'react-bootstrap';
import { EntregaContext } from '../../Store/entregaContext';
import { Link } from 'react-router-dom';

function DetalhesEntrega(props) {
    const { ticket } = props;

    const context = useContext(EntregaContext);
    let entregaPagamento = null;

    const onClickVoltar = (entregaPagamento) => {
        context.entregaButton = entregaPagamento;
        console.log('tickedetailComponenteNovo', context)
    }

    return (
        <div className='containerPrincipalPagamaneto'>
            <h1>Detalhes Entrega {props.ticket.id}</h1>
            <Link to={`/home/ticket/${ticket.id}`}>
                <Button type='submit' onClick={() => onClickVoltar('rotaDetalhes')}>Voltar</Button>
            </Link>
        </div>
    )
}

export default DetalhesEntrega
