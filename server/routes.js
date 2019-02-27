const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add('landing', '/')
  .add('discover', '/descubrir')
  .add('editProfile', '/editar-perfil')
  .add('editPost', '/editar-post/:postId')
  .add('feed', '/inicio')
  .add('myProfile', '/mi-perfil')
  .add('pictureDetails', '/foto/:username/:postId')
  .add('profile', '/perfil/:username')
  .add('uploadPicture', '/subir-foto')
  .add('chat', '/chat')
  .add('embeddedBrowser', '/browser');

module.exports = routes;
