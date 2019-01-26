export const fetchWrapper = async (url, options) => fetch(url, options)
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
