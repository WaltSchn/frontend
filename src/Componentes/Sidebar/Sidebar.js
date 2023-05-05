import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { SidebarData } from './SidebarData';


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <h1>Atendente</h1>
        {SidebarData.map((item, index) => {
          return (
            <div className="button" key={index}>
              <div className={item.cName} >
                <Link to={item.path} style={{ textDecoration: 'none' }}>
                  <div className="box">
                    <div className="icon">{item.icon}</div>
                    <div className="text">{item.title}</div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Sidebar;