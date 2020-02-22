import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="blog">
      <header className="App-header">
        <h1>baibonjwa@blog:~$</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rss">RSS</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
