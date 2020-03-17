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
        title, summary, content, createdAt
      } : {
        title: string, summary: string,
        content: string, createdAt: string
      }) => (
        <li key={createdAt} className="article">
          <h2><Link to={`/article/${createdAt}`}>{title}</Link></h2>
          <p className="datetime">{createdAt}</p>
          <p>{summary}</p>
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
        summary
        content
        createdAt
      }
    }
  }
`