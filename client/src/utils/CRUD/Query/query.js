import { gql } from "@apollo/client";

export const getCatAndItems = gql`
query Query {
  category {
    _id
    name
    items {
      name
      _id
    }
  }
}
`;