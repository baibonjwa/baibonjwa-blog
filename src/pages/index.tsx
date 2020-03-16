import React from "react"
import Navigation from '../components/Navigation';
import { Link, graphql } from 'gatsby';
import '../styles/global.scss';
import './index.scss';

export default ({ data }) =>
<div className="blog">
  <Navigation />
  <ul className="articles">
    {
      data.api.articles.map(({
        title, content, createdAt
      } : {
        title: string, content: string,
        createdAt: string
      }) => (
        <li key={createdAt} className="article">
          <h2><Link to={`/article/${createdAt}`}>{title}</Link></h2>
          <p className="datetime">{createdAt}</p>
          <p>{`${content.substring(0, 500)}...`}</p>
        </li>
      ))
    }
  </ul>
</div>

export const query = graphql`
  {
    api {
      articles(last: null) {
        title
        content
        createdAt
      }
    }
  }
`