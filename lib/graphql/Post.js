import gql from 'graphql-tag';

// @todo: change POST mutations author for context.user (for security)

export const Fragments = {
  Comments: gql`
    fragment PostComments on Comments {
      _id
      nodes {
        _id
        author {
          username
          profilePic
        }
        content
        createdAt
      }
    }
  `,
  IsLiked: gql`
    fragment PostIsLiked on LikeStatus {
      _id
      isLiked
    }
  `,
  Dots: gql`
    fragment PostDots on Dots {
      _id
      nodes {
        _id
        brand {
          name
          website
        }
        title
        price
        currency
        xPosition
        yPosition
      }
    }
  `,
  // PostLikes: gql`
  //   fragment PostLikes on Likes {
  //     _id
  //     nodes {
  //       _id
  //       author {
  //         username
  //         profilePic
  //       }
  //       content
  //       createdAt
  //     }
  //   }
  // `,
};

export const Queries = {
  GET_COMMENTS: gql`
    query GET_COMMENTS ($postId: String!) {
      comments (postId: $postId) {
        ...PostComments
      }
    }
    ${Fragments.Comments}
  `,
};

export const Mutations = {
  ADD_DOT: gql`
    mutation ADD_DOT (
      $postId: String!, $xPosition: Float!, $yPosition: Float!, $title: String!, $brand: String!, $price: Int!, $currency: String!
    ) {
      addDot (
        postId: $postId, 
        xPosition: $xPosition,
        yPosition: $yPosition, title: $title, brand: $brand, price: $price, currency: $currency
      ) {
        _id
        dots {
          ...PostDots
        }
      }
    }
    ${Fragments.Dots}
  `,
  CREATE: gql`
    mutation CREATE ($author: String!, $caption: String!, $picUrl: String!, $picId: String!) {
      createPost (author: $author, caption: $caption, picUrl: $picUrl, picId: $picId) {
        _id
        picUrl
      }
    }
  `,
  EDIT: gql`
    mutation EDIT ($_id: String!, $caption: String!) {
      editPost (_id: $_id, caption: $caption) {
        picUrl
        dots {
          ...PostDots
        }
      }
    }
    ${Fragments.Dots}
  `,
  COMMENT: gql`
    mutation COMMENT ($postId: String!, $author: String!, $comment: String!) {
      commentPost (postId: $postId, author: $author, comment: $comment) {
        ...PostComments
      }
    }
    ${Fragments.Comments}
  `,
  LIKE: gql`
    mutation LIKE ($postId: String!) {
      likePost (postId: $postId) {
        ...PostIsLiked
      }
    }
    ${Fragments.IsLiked}
  `,
  UNLIKE: gql`
    mutation UNLIKE ($postId: String!) {
      unlikePost (postId: $postId) {
        ...PostIsLiked
      }
    }
    ${Fragments.IsLiked}
  `,
};
