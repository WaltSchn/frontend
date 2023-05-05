import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Perfil from '../Pages/Perfil/Perfil';
import Sidebar from '../Componentes/Sidebar/Sidebar';
import TicketDetails from '../Pages/TicketDetail/TicketDetails';
import Login from '../Pages/Login/Login'
import Documentos from '../Pages/Documentos/Documentos'

const RouteController = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<div><Sidebar /><Dashboard /></div>}/>
          <Route path="/home/ticket/:id" element={<div><Sidebar /><TicketDetails /></div>} />
          <Route path="/perfil" element={<div><Sidebar /><Perfil /></div>} />
          <Route path="/documentos" element={<div><Sidebar /><Documentos /></div>} />
        </Routes>
      
    </Router>
  );
}

export default RouteController;