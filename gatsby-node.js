const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/pages/article.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    {
      api {
        articles(last: null) {
          title
          content
          createdAt
        }
      }
    }
  `, {}).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log(result);
    result.data.api.articles.forEach(article => {
      createPage({
        path: `/article/${article.createdAt}`,
        // matchPath: `/article/:id`,
        component: articleTemplate,
        context: {
        },
      })
    })
  })
}
