const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    budgets: [Budget]!
  }

  type Budget {
    _id: ID
    name: String
    expense: Number!
    budget: Number!
  }


  type Query {
    users: [User]
    user(username: String!): User
    budgets(_id: ID): [Budget]
    me: User
  }

  type Mutation {
    addBudget(name: String!, expense: Number!, budget: Number!): Budget
    removeBudget(budgetid: ID): String
  }
`;

module.exports = typeDefs;
