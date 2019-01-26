const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add('landing', '/')
  .add('feed', '/inicio')
  .add('discover', '/descubrir')
  .add('myProfile', '/miperfil')
  .add('editProfile', '/editarperfil');

module.exports = routes;
