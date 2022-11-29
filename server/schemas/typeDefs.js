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
    expense: Number!
    budget: Number!
  }

  type Item {
    _id: ID
    name: String
    price: Number
  }

  type Query {
    users: [User]
    user(username: String!): User
    expenses(_id: ID): [Expense]
    me: User
    item:(id: ID!): Item
  }

  type Mutation {
    addExpense(name: String!, expense: Number!, budget: Number!): Expense
    removeExpense(expenseid: ID): String
    addItem(name: String!, price: Number!): Item
    removeItem(itemid: ID!): String
  }
`;

module.exports = typeDefs;
