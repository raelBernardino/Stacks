import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password :$password) {
      success,
      token
    }
  }
`

export const ADD_COURSE = gql`
  mutation AddCourse($title: String!, $description: String!) {
    addCourse(title: $title, description: $description) {
      success,
      message
    }
  }
`
export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      success
      message
      user {
        email
        username
        id
        courses {
          id
          title
          description
          stacks {
            id
            title
            description
          }
        }
      }
    }
  }
`