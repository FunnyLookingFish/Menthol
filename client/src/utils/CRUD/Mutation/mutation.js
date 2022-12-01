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