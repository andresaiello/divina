module.exports = {
  serverRuntimeConfig: {
    PORT: process.env.PORT || 3004,
    ENV: process.env.NODE_ENV || 'development',
    GQL_SERVER_URL: process.env.GQL_SERVER_URL || 'http://localhost:3004/graphql',
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'divinaapp.eu.auth0.com',
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'wn37BZhm1Zx-l2_B1D7oJJHJgm7R6dhc',
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || 'WdVYhMdzI95F4axV_hi0AqZS9V-GGY6PzBpd9ni32z2i0RAp4ptoZBL-RPeIZdi_',
    AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || `http://localhost:${process.env.PORT || 3004}/callback`,
    SEC_COOKIE: process.env.SEC_COOKIE || false,
    CLOUDINARY_UPLOAD_URL: process.env.CLOUDINARY_UPLOAD_URL || 'https://api.cloudinary.com/v1_1/da9cucer2/upload',
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET || 'ov3f36hw',
    NPM_VERSION: process.env.npm_package_version || '---',
  },

  publicRuntimeConfig: {
    GQL_SERVER_URL: process.env.GQL_SERVER_URL || 'http://localhost:3004/graphql',
    CLOUDINARY_UPLOAD_URL: process.env.CLOUDINARY_UPLOAD_URL || 'https://api.cloudinary.com/v1_1/da9cucer2/upload',
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET || 'ov3f36hw',
    NPM_VERSION: process.env.npm_package_version || '---',
  },
};
