export const fetchWrapper = async (url, options = { headers: {} }) => fetch(url, {
  ...options,
  headers: { ...options.headers, 'Access-Control-Allow-Origin': '*' },
})
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
      }

      return response.text();
    }

    return Promise.reject(response);
  });

export const promiseTimeout = ms => new Promise(resolve => setTimeout(resolve, ms));

export const isFetchingMore = networkStatus => networkStatus === 3;

export const isRefreshing = networkStatus => networkStatus === 4;

export const formatPrice = (price, currency) => {
  switch (currency) {
    case 'EUR':
      return `€ ${price}`;
    default:
      return `€ ${price}`;
  }
};
