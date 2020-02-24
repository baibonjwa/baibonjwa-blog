import React, { useEffect } from 'react';
import './App.scss';
import { useQuery, gql } from '@apollo/client';

const ReactMarkdown = require('react-markdown')

const GET_ARTICLES = gql`
{
  articles(last: null) {
    title
    content
    createdAt
  }
}
`;

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
              <h2><a href={`/${title}`}>{title}</a></h2>
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
