const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const flash = require('connect-flash');

const routes = require('./routes');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const { typeDefs, resolvers } = require('./graphql');

const NODE_ENV = process.env.NODE_ENV || 'development';
const dev = NODE_ENV !== 'production';
const PORT = process.env.PORT || 3004;
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

require('./db').connect();

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN || 'divinaapp.eu.auth0.com',
    clientID: process.env.AUTH0_CLIENT_ID || 'wn37BZhm1Zx-l2_B1D7oJJHJgm7R6dhc',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || 'WdVYhMdzI95F4axV_hi0AqZS9V-GGY6PzBpd9ni32z2i0RAp4ptoZBL-RPeIZdi_',
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || `http://localhost:${PORT}/callback`,
  },
  ((accessToken, refreshToken, extraParams, profile, done) => done(null, profile)
  ),
);

passport.use(strategy);

// You can use this section to keep a smaller payload
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// config express-session
const sess = {
  secret: 'CHANGE THIS SECRET',
  cookie: { secure: process.env.NODE_ENV === 'production' },
  resave: false,
  saveUninitialized: true,
};

app.prepare()
  .then(() => {
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    const server = express();
    apolloServer.applyMiddleware({ app: server });
    server.use(cookieParser());
    server.use(session(sess));

    server.use(passport.initialize());
    server.use(passport.session());
    server.use(flash());

    server.use('/', authRouter);
    server.use('/api/', apiRouter);
    server.use('/api/', userRouter);


    server.use('/', handler);

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Running in ${NODE_ENV} mode`);
      console.log(`> Server ready on http://localhost:${PORT}`);
      console.log(`> GraphQL server: http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
