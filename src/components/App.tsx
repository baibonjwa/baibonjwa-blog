import React, { useEffect } from 'react';
import './App.scss';
import { useQuery, gql } from '@apollo/client';
import { GET_ARTICLES } from './constant/graphql';

import { Link } from "react-router-dom";
import Navigation from './Navigation';

function App() {
  const { loading, error, data } = useQuery(GET_ARTICLES);
  return (
    <div className="blog">
      <Navigation />
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
