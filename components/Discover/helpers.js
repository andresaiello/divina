export const byClothingStyles = selection => post => {
  if (!selection.length) return true;

  const styles = post.clothingStyles && post.clothingStyles.nodes;
  return selection.reduce((acc, curr) => styles.some(s => s.name === curr.name) || acc, false);
};

export function fetchMorePosts(fetchMore, shouldFetch, filters = {}) {
  const variables = {
    amount: 9,
    ...filters,
  };

  if (shouldFetch) {
    fetchMore({
      variables,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return Object.assign({}, fetchMoreResult, {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes],
          },
        });
      },
    });
  }
}
