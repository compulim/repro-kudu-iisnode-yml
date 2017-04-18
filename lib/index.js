'use strict';

const app = require('express')();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.json({ NODE_ENV: process.env.NODE_ENV, now: Date.now(), version: process.version });
}).listen(port, () => {
  console.log(`Server started and listening to port ${ port }`);
});
