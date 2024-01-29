import { gql } from '@apollo/client'

export const GET_USERS = gql`
    query GetUsers {
        getUsers {
          id
          userName
          password
          email
        }
    }
`

export const FIND_USER = gql`
    query ExampleQuery($username: String) {
        findUser(username: $username) {
          userName
          password
        }
   }
`