import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav >
      <Link to="/">Home</Link>
      <Link to="/axios-query">Axios Query</Link>
      <Link to="/react-query">React Query</Link>
    </nav>
  );
}

export default Header