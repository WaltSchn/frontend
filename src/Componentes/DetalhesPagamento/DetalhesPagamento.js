import React, { useContext, useEffect } from 'react';
import './DetalhesPagamento.css';
import { Button } from 'react-bootstrap';
import { PagamentoContext } from '../../Store/pagamentoContext';
import { Link } from 'react-router-dom';

function DetalhesPagamento(props) {
    const { ticket } = props;

    const context = useContext(PagamentoContext);
    let buttonPagamento = null;

    const onClickVoltar = (buttonPagamento) => {
        context.pagamentoButton = buttonPagamento;
        console.log('tickedetailComponenteNovo', context)
    }

    return (
        <div className='containerPrincipalPagamaneto'>
            <h1>Detalhes Pagamento {props.ticket.id}</h1>
            <Link to={`/home/ticket/${ticket.id}`}>
                <Button type='submit' onClick={() => onClickVoltar('rotaDetalhes')}>Voltar</Button>
            </Link>
        </div>
    )
}

export default DetalhesPagamento
