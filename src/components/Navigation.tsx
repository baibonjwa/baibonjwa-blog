import React from 'react';
import './Navigation.scss';
import { Link } from 'gatsby';

const Navigation = () => {
  return(
    <header className="App-header">
      <h1>baibonjwa@blog:~$</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rss">RSS</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </header>
  )
}

export default Navigation;