import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiOutlineHome  fontSize="2rem" color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Documentos',
    path: '/documentos',
    icon: <AiIcons.AiOutlineFolder fontSize="2rem" color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaIcons.FaRegAddressBook fontSize="2rem" color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <FaIcons.FaSignOutAlt fontSize="2rem" color='black'/>,
    cName: 'nav-text'
  }
];
