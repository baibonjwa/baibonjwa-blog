import React, { useEffect } from 'react';
import './App.scss';
import { useQuery, gql } from '@apollo/client';
import { GET_ARTICLES } from './constant/graphql';

import { Link } from "react-router-dom";

function App() {
  const { loading, error, data } = useQuery(GET_ARTICLES);
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
      <ul className="articles">
        {
          data && data.articles.map(({
            title, content, createdAt
          } : {
            title: string, content: string,
            createdAt: string
          }) => (
            <li key={createdAt} className="article">
              <h2><Link to={`/articles/${encodeURIComponent(title)}`}>{title}</Link></h2>
              <p className="datetime">{createdAt}</p>
              <p>{`${content.substring(0, 500)}...`}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
