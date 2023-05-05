import React, { useContext } from 'react';
import './Dashboard.css';
import Sidebar from '../../Componentes/Sidebar/Sidebar';
import TopNavBar from '../../Componentes/TopNavBar/TopNavBar';
import TicktTable from '../../Componentes/TicketTable/TicketTable';
import { StatusContext } from '../../Store/statusContext';

const Dashboard = () => {

  return (
    <div  >
      <Sidebar />
      <div className="content">
        <h1 className="title">Tickets</h1>
        <TopNavBar />
        <TicktTable />
      </div>
    </div>
  );
}

export default Dashboard;
