import { gql } from '@apollo/client';

const GET_ARTICLES = gql`
{
  articles(last: null) {
    title
    content
    createdAt
  }
}
`;

export { GET_ARTICLES };