const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expense: [Expense]!
    budget: Int
  }

  type Expense {
    _id: ID
    name: String
    expense: Int!
  }

  type Category {
    _id: ID
    name: String
    items: [Expense]!
  }

  type Auth {
    user: User
    token: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    expenses(_id: ID): [Expense]
    me: User
    category: [Category]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, budget: Int!): Auth
    login(email: String!, password: String!): Auth
    addExpense(name: String!, categoryid:ID): User
    removeExpense(expenseid: ID): Expense
    createCategory(name: String!): Category
    updateExpense(expense: Int! expenseId:ID!): Expense
  }
`;

module.exports = typeDefs;
