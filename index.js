'use strict';

// const fs = require('fs');
const readCallback = require('./lib/callbacks.js');
const readPromise = require('./lib/promises.js');
const readAsync = require('./lib/async-await.js');

let file = process.argv.slice(2);

// readCallback(file);
readPromise(file);
// readAsync(file);
