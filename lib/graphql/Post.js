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
        color
        xPosition
        yPosition
      }
    }
  `,
  Likes: gql`
    fragment PostLikes on Likes {
      _id
      nodes {
        username
        profilePic
      }
    }
  `,
  ClothingStyles: gql`
    fragment PostClothingStyles on ClothingStyles {
      _id
      nodes {
        name
      }
    }
  `,
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
    mutation POST_ADD_DOT (
      $postId: String!,
      $xPosition: Float!,
      $yPosition: Float!,
      $title: String!,
      $brand: String!,
      $price: Int!,
      $color: String!,
      $currency: String!
    ) {
      addDot (
        postId: $postId, 
        xPosition: $xPosition,
        yPosition: $yPosition,
        title: $title,
        brand: $brand,
        price: $price,
        color: $color,
        currency: $currency
      ) {
        _id
        dots {
          ...PostDots
        }
      }
    }
    ${Fragments.Dots}
  `,
  SET_CLOTHING_STYLES: gql`
    mutation POST_SET_CLOTHING_STYLES ($postId: String!, $clothingStyles: [String]!) {
      setClothingStyles (postId: $postId, clothingStyles: $clothingStyles) {
        _id
        clothingStyles {
          ...PostClothingStyles
        }
      }
    }
    ${Fragments.ClothingStyles}
  `,
  DELETE_DOT: gql`
    mutation POST_DELETE_DOT ($postId: String!, $dotId: String!) {
      deleteDot (postId: $postId, dotId: $dotId) {
        _id
        dots {
          ...PostDots
        }
      }
    }
    ${Fragments.Dots}
  `,
  CREATE: gql`
    mutation POST_CREATE ($author: String!, $caption: String!, $picUrl: String!, $picId: String!) {
      createPost (author: $author, caption: $caption, picUrl: $picUrl, picId: $picId) {
        _id
        picUrl
      }
    }
  `,
  EDIT: gql`
    mutation POST_EDIT ($_id: String!, $caption: String!) {
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
    mutation POST_COMMENT ($postId: String!, $author: String!, $comment: String!) {
      commentPost (postId: $postId, author: $author, comment: $comment) {
        ...PostComments
      }
    }
    ${Fragments.Comments}
  `,
  LIKE: gql`
    mutation POST_LIKE ($postId: String!) {
      likePost (postId: $postId) {
        ...PostIsLiked
      }
    }
    ${Fragments.IsLiked}
  `,
  UNLIKE: gql`
    mutation POST_UNLIKE ($postId: String!) {
      unlikePost (postId: $postId) {
        ...PostIsLiked
      }
    }
    ${Fragments.IsLiked}
  `,
};
