const jsonServer = require('json-server');
const app = require('express');
const cors = require('cors');

const server = app();

server.use(cors());

server.use('/', jsonServer.router('db.json'));

server.listen(2000, () => {
  console.log(`JSON Server is running in 200`);
});

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults({ noCors: true });

// const port = process.env.PORT || 5000;

// server.use(middlewares);
// server.use(router);
// server.listen(port, () => {
//   console.log(`JSON Server is running in ${port}`);
// });
