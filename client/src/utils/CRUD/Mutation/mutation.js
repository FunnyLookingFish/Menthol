import { gql } from "@apollo/client";

export const updateExpense = gql`
mutation Mutation($expense: Int!, $expenseId: ID!) {
  updateExpense(expense: $expense, expenseId: $expenseId) {
    expense
    _id
    name
  }
}
`;

export const addExpense = gql`
mutation AddExpense($name: String!, $categoryid: ID) {
  addExpense(name: $name, categoryid: $categoryid) {
    _id
  }
}

`;