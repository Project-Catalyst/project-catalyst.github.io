const { gql } = require("graphql-request")

const pagesListQuery = gql`
  {
    pages {
      list {
        id
        path
        title
        locale
        isPublished
        isPrivate
      }
    }
  }
`

const pageSingleQuery = gql`
  query SinglePage($id: Int!) {
    pages {
      single(id: $id) {
        path
        title
        content
        locale
      }
    }
  }
`
const navigationQuery = gql`
{
  navigation{
    tree{
        locale,
        items{label,target,targetType}
    }
  }
}
`

module.exports = {
  pagesListQuery,
  pageSingleQuery,
  navigationQuery
}
