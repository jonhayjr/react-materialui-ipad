import React from 'react';

import './Header.css';

/*Import Material-UI Components*/
import Avatar from '@mui/material/Avatar';

const Header = ({title}) => {
  return (
    <header className="header">
      <Avatar className="header-avatar">JH</Avatar>
      <h1 className="header-title">{title}</h1>
    </header>
  )
}

export default Header;