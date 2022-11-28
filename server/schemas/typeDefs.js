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
    payment: Number
  }

  type Food {
    grocery: String
    expense: Number
  }

  type Utilities {
    utilities: String
    expense: Number
  }

  type Vehicle {
    name: String
    expense: Number
  }

  type Misc {
    name: String
    expense: Number
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
