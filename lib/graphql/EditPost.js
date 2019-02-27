import gql from 'graphql-tag';
import { Fragments as PostFragments } from './Post';

export const Fragments = {

};

export const Queries = {
  GET_POST: gql`
    query EDIT_POST_GET_POST ($_id: String!) {
      post (_id: $_id) {
        picUrl
        caption
        dots {
          ...PostDots
        }
      }
    }
    ${PostFragments.Dots}
  `,
  GET_BRANDS: gql`
    query EDIT_POST_GET_BRANDS {
      brands {
        nodes {
          _id
          name
          website
        }
      }
    }
  `,
};

export const Mutations = {

};
