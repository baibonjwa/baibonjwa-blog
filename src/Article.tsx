import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { GET_ARTICLES } from './constant/graphql';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import Navigation from './Navigation';

const Article = () => {
  let { id } = useParams()
  if (id) {
    id = decodeURIComponent(id)
  }
  const vertexShaderNode = useRef<HTMLDivElement>(null);
  let article;
  const { loading, error, data } = useQuery(GET_ARTICLES);
  if (data) {
    article = data.articles.find((
      { title, content }:
      { title: string, content: string }
    ) => {
      return title === id
    })
  }

  return (
    <div>
      <Navigation />
      <article className="markdown-body">
        <ReactMarkdown
          source={ article && article.content }
          escapeHtml={false}
        />
      </article>
    </div>
  )
}

export default Article;