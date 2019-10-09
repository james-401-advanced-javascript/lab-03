'use strict';

// When mocking out embedded modules like fs or buffer, you have to tell jest to mock it
// For 3rd party modules, you can "auto" mock them by simply putting them in the correct __mocks__ folder
jest.mock('fs');
const reader = require('../lib/async-await');

// Test asynchronous calls
 it('when given a real promise, returns the contents', async () => {
    let file = `${__dirname}/../../data/person.json`;
    await expect(typeof reader.readPromise(file)).resolves.toBe('string');
  });
  
  it('when given a bad promise, returns an error', async () => {
    let file = `${__dirname}/../../data/bad.txt`;
    try {
      await expect(typeof reader.readPromise(file)).toBeDefined();
    }
    catch (err) {
      await expect(err).toMatch('error');
    }});
});