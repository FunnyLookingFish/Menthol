const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    budget: [Budget]!
  }

  type Budget {
    _id: ID
    name: String
    expense: String
    budget: [Budget]!
  }

  type Home {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Food {
    token: ID!
    user: User
  }

  type Utilities {
    token: ID!
    user: User
  }

  type Misc {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
