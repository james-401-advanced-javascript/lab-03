'use strict';

const fs = require('fs');
const faker = require('faker');
const util = require('util');
const promise = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

async function readAsync(file) {
  let path = `${process.cwd()}/${file}`;
  try {
    let data = await promise(path);
    data = JSON.parse(data);
    console.log('Original Async-Await Data: ', data);
    data.favoriteColor = faker.commerce.color();
    data = JSON.stringify(data);
    console.log('New Async-Await Data: ', JSON.parse(data));
    data = await write(path, data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = readAsync;
