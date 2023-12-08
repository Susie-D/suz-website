import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../../assets/images/suz-logo.png';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        Sidebar
      </Link>
    </div>
  );
};

export default Sidebar;
