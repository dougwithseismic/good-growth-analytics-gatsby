const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   console.log('ENDPOINT: ', process.env.GCMS_ENDPOINT)

//   // Query for markdown nodes to use in creating pages.
//   const result = await graphql(
//     `
//     {
//         articles: gcms {
//           articlesConnection {
//             edges {
//               node {
//                 id
//                 slug
//                 stage
//               }
//             }
//           }
//         }
//         authors: gcms {
//           authorsConnection {
//             edges {
//               node {
//                 id
//                 slug
//                 stage
//               }
//             }
//           }
//         }
//       }
//       `
//   )

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   // ARTICLES GET BUILD HERE .
//   const articleTemplate = path.resolve(`src/templates/article.js`)

//   // FOR SPEED PURPOSES, LETS ONLY ALLOW 10 ARTICLES TO BE BUILD IN DEVELOPMENT
//   console.log('ENV: ', process.env.NODE_ENV)
//   if (process.env.NODE_ENV === 'development') {
//     result.data.articles.articlesConnection.edges.length = 10
//   }

//   result.data.articles.articlesConnection.edges.forEach(({ node }) => {
//     const slug = node.slug
//     if (node.stage !== 'DRAFT') {
//       createPage({
//         path: slug,
//         component: articleTemplate,
//         // In your blog post template's graphql query, you can use path
//         // as a GraphQL variable to query for data from the markdown file.
//         context: {
//           slug,
//         },
//       })
//     }
//   })

//   // PRIVACY POLICY, T&CS ETC GET BUILT HERE.
//   //   result.data.additionalPages.additionalPagesConnection.edges.forEach(({ node }) => {
//   //     const slug = node.slug
//   //     if (node.status !== 'DRAFT') {
//   //       createPage({
//   //         path: slug,
//   //         component: additionalPageTemplate,
//   //         // In your blog post template's graphql query, you can use path
//   //         // as a GraphQL variable to query for data from the markdown file.
//   //         context: {
//   //           slug
//   //         }
//   //       })
//   //     }
//   //   })
// }

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/out/)) {
//     page.matchPath = `/out/*`

//     // Update the page.
//     createPage(page)
//   }
// }
