'use strict';

// const fs = require('fs');
// const readCallback = require('./lib/callbacks.js');
const readPromise = require('./lib/promises.js');
// const readAsync = require('./lib/async-await.js');

let file = process.argv.slice(2);

// readCallback(file);
readPromise(file);
// readAsync(file);

/**
 * Simple Server
 * @module index
 */

const express = require('express');

const app = express();

app.use('/docs', express.static('./docs'));

app.get('/', requestHandler);

function requestHandler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end();
}

app.listen(process.env.PORT, () =>
  console.log(`server up on port ${process.env.PORT}`)
);
