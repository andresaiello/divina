const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add('discover', '/descubrir')
  .add('editProfile', '/editarperfil')
  .add('feed', '/inicio')
  .add('landing', '/')
  .add('myProfile', '/miperfil')
  .add('pictureDetails', '/foto/:postId')
  .add('profile', '/perfil/:username');

module.exports = routes;
