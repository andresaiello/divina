const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

const getConfig = require('../next.config.js');
const db = require('./db');
const routes = require('./routes');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const brandsRouter = require('./routes/brands');
const setupPassport = require('./passport');
const { typeDefs, resolvers } = require('./graphql');

const { PORT, ENV, SEC_COOKIE, SESSION_SECRET } = getConfig.serverRuntimeConfig;
const dev = ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const dbConnection = db.connect();
    const server = express();
    const passport = setupPassport();

    server.use(cookieParser());
    server.use(
      session({
        secret: SESSION_SECRET,
        cookie: { secure: SEC_COOKIE },
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({
          mongooseConnection: dbConnection,
        }),
      }),
    );

    server.use(passport.initialize());
    server.use(passport.session());
    server.use(flash());

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      cors: { credentials: 'include' },
      context: ({ req }) => ({
        loggedUser: req ? req.user : {},
      }),
    });

    apolloServer.applyMiddleware({ app: server });

    const httpServer = http.createServer(server);
    apolloServer.installSubscriptionHandlers(httpServer);

    const options = {
      root: path.join(__dirname, '../static'),
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    };

    server.get('/robots.txt', (req, res) => res.status(200).sendFile('robots.txt', options));

    server.use('/', authRouter);
    server.use('/api/', apiRouter);
    server.use('/api/', userRouter);
    server.use('/api/', brandsRouter);

    server.use('/', handler);

    server.get('*', (req, res) => handle(req, res));

    httpServer.listen(PORT, err => {
      if (err) throw err;
      console.log(`Running in ${ENV} mode`);
      console.log(`> Server ready on http://localhost:${PORT}`);
      console.log(`> GraphQL server: http://localhost:${PORT}${apolloServer.graphqlPath}`);
      console.log(
        `> GraphQL Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`,
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
