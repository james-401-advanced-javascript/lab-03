'use strict';

const fs = require('fs');
const faker = require('faker');

function read(file) {
  // We want to read the file and then do some error-first handling of the response
  file = `${process.cwd()}/data/person.json`;
  fs.readFile(file, function(err, data) {
    // If error, handle error
    if (err) {
      throw err;
    }
    else {
      // If no error, assign job title to person
      data = JSON.parse(data);
      console.log('Original Data: ', data);
      data.jobTitle = faker.name.jobTitle();
      data = JSON.stringify(data);
    }

    // Write changes to data and verify changes
    fs.writeFile(file, data, (err) => {
      if (err) {
        throw err;
      }
      else {
        console.log('New Data: ', data);
      }
    });
  });
}

module.exports = read;