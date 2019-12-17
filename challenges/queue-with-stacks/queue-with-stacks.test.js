const { Pseudoqueue } = require('./queue-with-stacks.js');

describe('Pseudoqueue module', () => {

  it('should have an enqueue method which inserts a value first-in, first-out approach', () => {
    const pseudoqueue = new Pseudoqueue();
    pseudoqueue.stack1.push(1);
    pseudoqueue.stack1.push(2);
    pseudoqueue.stack1.push(3);

    pseudoqueue.enqueue(4);

  });

  it('should have an dequeue method which extracts a value first-in, first-out approach', () => {

  });
});
