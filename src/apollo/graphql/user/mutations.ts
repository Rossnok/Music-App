import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation CreateUser($userName: String, $password: String, $email: String) {
        createUser(userName: $userName, password: $password, email: $email) {
            id
            userName
            password
            email
        }
    }
`