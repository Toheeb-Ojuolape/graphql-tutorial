import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;


const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;


const addBookMutation = gql
`
mutation {
    addBook(name:"",genre:"",authorId:""){
        name
        id
    }
}
`

export {getAuthorsQuery,getBooksQuery,addBookMutation}