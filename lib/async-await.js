'use strict';

const fs = require('fs');
const util = require('util');
const promise = util.promisify(fs.readFile);

function readAsync(file) {
  return promise(file)
    .then((data) => {
      data = data.toString().trim();
      console.log(data);
      return data;
    }).catch(error => error);
}

module.exports = readAsync;