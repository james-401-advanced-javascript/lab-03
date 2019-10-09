'use strict';

const fs = require('fs');
const faker = require('faker');
const util = require('util');
const promise = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

function readAsync(file) {
  let path = `${process.cwd()}/${file}`;
  try {
    return promise(path)
      .then(data => {
        data = JSON.parse(data);
        console.log('Original Promise Data: ', data);
        data.jobTitle = faker.name.jobTitle();
        data = JSON.stringify(data);
        return data;
      })
      .then(data => {
        console.log('New Promise Data: ', JSON.parse(data));
        return write(path, data)
          .catch(err => err);
      });
  }
  catch(error) {
    console.log(error);
  }
}

module.exports = readAsync;