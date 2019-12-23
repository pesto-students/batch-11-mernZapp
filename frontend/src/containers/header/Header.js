import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from './logo.png';
import './header.css';

const Header = () => (
  <div className="header">
    <div className="header-container">
      <img src={logo} alt="logo" />
    </div>
    <div className="header-right">
      <div className="setting">
        <Link to="/settings">
          <SettingsIcon />
        </Link>
      </div>
      <div className="logout">
        <Link to="/login">
          <ExitToAppIcon />
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
