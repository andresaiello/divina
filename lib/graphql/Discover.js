import gql from 'graphql-tag';

import { Fragments as PostFragments } from './Post';

export const Queries = {
  GET_POSTS: gql`
    query DISCOVER_GET_POSTS ($startingDate: String, $amount: Int, $clothingStyles: [String]) {
      posts (startingDate: $startingDate, amount: $amount, clothingStyles: $clothingStyles) {
        nodes {
          _id
          picUrl
          caption
          createdAt
          author {
            _id
            username
          }
          clothingStyles {
            ...PostClothingStyles
          }
        }
        pageInfo {
          lastCursor
          hasNextPage
        }
      }
    }
    ${PostFragments.ClothingStyles}
  `,
};
