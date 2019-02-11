const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);
const getConfig = require('../next.config.js');

const { PORT, ENV, SEC_COOKIE } = getConfig.serverRuntimeConfig;
const db = require('./db');
const routes = require('./routes');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const setupPassport = require('./passport');
const { typeDefs, resolvers } = require('./graphql');

const dev = ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const connection = db.connect();
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    const server = express();
    apolloServer.applyMiddleware({ app: server });
    server.use(cookieParser());
    server.use(session({
      secret: '@todo CHANGE THIS SECRET',
      cookie: { secure: SEC_COOKIE },
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({
        mongooseConnection: connection,
      }),
    }));

    const passport = setupPassport();

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
      console.log(`Running in ${ENV} mode`);
      console.log(`> Server ready on http://localhost:${PORT}`);
      console.log(`> GraphQL server: http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
