import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return(
    <header className="App-header">
      <h1>baibonjwa@blog:~$</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/rss">RSS</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
    </header>
  )
}

export default Navigation;