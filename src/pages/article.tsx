import React from "react"
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import Navigation from '../components/Navigation';
import './article.scss';

export default ({ data, location }) => {
  const id = location.pathname.split('/').pop()
  const article = data.api.articles.find((
    { createdAt}: { createdAt: string }
  ) => createdAt === id)
  return (
    <div>
      <Navigation />
      <article className="markdown">
        <ReactMarkdown
          source={ article && article.content }
          escapeHtml={false}
        />
      </article>
    </div>
  )
}

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