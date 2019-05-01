const ip = require('ip');

const PORT = 3004;

const debugMobile = false;

const host = debugMobile ? ip.address() : 'localhost';

module.exports = {
  serverRuntimeConfig: {
    PORT: process.env.PORT || PORT,
    ENV: process.env.NODE_ENV || 'development',
    GQL_SERVER_URL: process.env.GQL_SERVER_URL || `http://${host}:${PORT}/graphql`,
    MONGO_SERVER_URL:
      process.env.MONGO_SERVER_URL ||
      'mongodb://divinaapp:k6gbTKbThhKrD5b1@ds059692.mlab.com:59692/divina-app',
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'divinaapp.eu.auth0.com',
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'wn37BZhm1Zx-l2_B1D7oJJHJgm7R6dhc',
    AUTH0_CLIENT_SECRET:
      process.env.AUTH0_CLIENT_SECRET ||
      'WdVYhMdzI95F4axV_hi0AqZS9V-GGY6PzBpd9ni32z2i0RAp4ptoZBL-RPeIZdi_',
    AUTH0_CALLBACK_URL:
      process.env.AUTH0_CALLBACK_URL || `http://${host}:${process.env.PORT || PORT}/callback`,
    SEC_COOKIE: process.env.SEC_COOKIE || false,
    CLOUDINARY_UPLOAD_URL:
      process.env.CLOUDINARY_UPLOAD_URL || 'https://api.cloudinary.com/v1_1/da9cucer2/upload',
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET || 'ov3f36hw',
    SESSION_SECRET: process.env.SESSION_SECRET || 'fsdffsdlfkjsoiuyd65876sbe',
    NPM_VERSION: process.env.npm_package_version || '---',
  },
  publicRuntimeConfig: {
    GQL_SERVER_URL: process.env.GQL_SERVER_URL || `http://${host}:${PORT}/graphql`,
    GQL_WS_SERVER_URL: process.env.GQL_WS_SERVER_URL || `ws://${host}:${PORT}/graphql`,
    CLOUDINARY_UPLOAD_URL:
      process.env.CLOUDINARY_UPLOAD_URL || 'https://api.cloudinary.com/v1_1/da9cucer2/upload',
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET || 'ov3f36hw',
    NPM_VERSION: process.env.npm_package_version || '---',
    SERVER_URL: process.env.server_url || 'https://app.divinaapp.com',
    ANALYTICS_TRACKING_ID: process.env.ANALYTICS_TRACKING_ID || 'UA-137727478-2',
    FB_APP_ID: process.env.fb_app_id || '1217981644879628',
  },
};
