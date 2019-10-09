'use strict';

// When mocking out embedded modules like fs or buffer, you have to tell jest to mock it
// For 3rd party modules, you can "auto" mock them by simply putting them in the correct __mocks__ folder
jest.mock('fs');

const read = require('../lib/callbacks');

// Notice the use of done as a param to the it() block, and calling done() within the async functions

describe('File Reader Module', () => {
  it('when given a bad file, returns an error', done => {
    let file = `${__dirname}/../../data/bad.txt`;
    // when given a bad file, error should be defined, meaning that the error should exist
    expect(() => {
      read(file);
    }).toThrow();
    done();
  });

  it('when given a real file, returns the contents', done => {
    let file = `${__dirname}/../../data/person.json`;
    expect(() => {
      read(file);
    }).toBeDefined();
    // When given a real file, error should be undefined
    // and data should be string
    expect(typeof data).toBe('string');
    done();
  });
});
