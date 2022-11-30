const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expenses: [Expense]!
  }

  type Expense {
    _id: ID
    name: String
    expense: Int!
    budget: Int!
  }

  type Category {
    _id: ID
    items: [Expense]!
    price: Int
  }

  type Query {
    users: [User]
    user(username: String!): User
    expenses(_id: ID): [Expense]
    me: User
    category(_id: ID): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addExpense(name: String, expense: Int!, budget: Int!): Expense
    removeExpense(expenseid: ID): Expense
  }
`;

module.exports = typeDefs;
