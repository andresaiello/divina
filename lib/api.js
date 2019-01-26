import { fetchWrapper, promiseTimeout } from '~/util';

const API_URL = process.env.NODE_ENV === 'production' ? 'https://app.divinaapp.com/api' : 'http://localhost:3004/api';

export const getPosts = async () => {
  await promiseTimeout(1500);
  return [{ id: Math.random() }, { id: Math.random() }];
};
// export const getPosts = fetchWrapper(`${API_URL}/posts`, {

// })
//   .then(() => {

//   })
//   .catch((e) => {

//   });
