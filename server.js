const jsonServer = require('json-server');
const app = require('express');
const cors = require('cors');

const server = app();

server.use(cors());

server.use('/', jsonServer.router('db.json'));

server.listen(2000, () => {
  console.log(`JSON Server is running in 2000`);
});
