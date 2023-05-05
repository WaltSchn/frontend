import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MuiThemes from './Utils/Common/MuiThemes';
import RouteController from './Routes/RouteController';
import { StatusContextProvider } from './Store/statusContext';
import { PagamentoContextProvider } from './Store/pagamentoContext';
import { EntregaContextProvider } from './Store/entregaContext';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemes>
      <PagamentoContextProvider>
        <StatusContextProvider>
          <EntregaContextProvider>
            <RouteController />
          </EntregaContextProvider>
        </StatusContextProvider>
      </PagamentoContextProvider>
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();