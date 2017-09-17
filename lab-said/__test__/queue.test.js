'use strict';

const Queue = require('../lib/queue');
require('jest');

describe('queue methods', () => {
  describe('queue methods', () => {
    describe('enqueue', () => {
      test('should add new node to the end of a Queue', () => {
        let result = new Queue;
        result.enqueue(1);
        expect(result).toEqual(1);
      });
    });
    describe('dequeue', () => {
      test('should remove the first in node in the front of the queue', () => {
        let deqResult = new Queue;
        deqResult.enqueue(1);
        deqResult.enqueue(2);
        deqResult.dequeue();
        expect(deqResult).toEqual(2);
      });
    });
  });
});
