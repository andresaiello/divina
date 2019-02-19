const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add('discover', '/descubrir')
  .add('editProfile', '/editar-perfil')
  .add('feed', '/inicio')
  .add('landing', '/')
  .add('myProfile', '/mi-perfil')
  .add('pictureDetails', '/foto/:username/:postId')
  .add('profile', '/perfil/:username')
  .add('uploadPicture', '/subir-foto/:picUrl')
  .add('chat', '/chat')
  .add('embeddedBrowser', '/browser');

module.exports = routes;
