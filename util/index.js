import getConfig from 'next/config';
import router, { Router } from '~/server/routes';
import * as loadImage from 'blueimp-load-image/js/load-image.all.min';

const { publicRuntimeConfig } = getConfig();
const { CLOUDINARY_UPLOAD_URL, CLOUDINARY_PRESET } = publicRuntimeConfig;

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

const base64ToFile = async base64Img => fetch(base64Img)
  .then(res => res.blob())
  .then(blob => new File([blob], 'image'));

const createCloudinaryForm = (file, tags = []) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_PRESET); // se configura en cloudinary
  formData.append('multiple', true);
  formData.append('tags', tags.join(', '));
  formData.append('context', '');

  return formData;
};

const uploadToCloudinary = async formData => fetch(CLOUDINARY_UPLOAD_URL, {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  // eslint-disable-next-line
  .then(({ public_id, secure_url }) => ({ public_id, secure_url }));
  // @todo: do something when the upload fails

export const base64ToCloudinary = async (base64Img, tags) => {
  const file = await base64ToFile(base64Img);
  const formData = createCloudinaryForm(file, tags);
  return uploadToCloudinary(formData);
};

export const readImageAsBase64 = async image => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    img.onload = async () => {
      resolve({ base64Img: img.src, width: img.width, height: img.height });
    };
  };

  if (image) reader.readAsDataURL(image);
  else reject(new Error('No image provided'));
});

export const serverRedirect = routeName => (res) => {
  res.writeHead(302, { Location: router.findByName(routeName).toPath() });
  res.end();
};

export const clientRedirect = (routeName) => { Router.pushRoute(routeName); };

export const isServer = () => !process.browser;

export const isLoggedIn = user => !!(user && user.username);
