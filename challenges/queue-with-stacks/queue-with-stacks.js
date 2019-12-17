class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    if(!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top;
  }

  peek() {
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

class Pseudoqueue {

  constructor() {
    this.stack1 = new Stack(),
    this.stack2 = new Stack();
  }

  enqueue(value) {

    console.log(this.stack1);

    while(!this.stack1.isEmpty()) {
      const top = this.stack1.pop(this.stack1.top);
      this.stack2.push(top);
    }

    console.log(this.stack2);

    this.stack2.push(value);

    console.log(this.stack2);

    while(!this.stack2.isEmpty()) {
      const top = this.stack2.pop(this.stack2.top);
      this.stack1.push(top);
    }

    console.log(this.stack1);
    
  }

  dequeue(value) {

  }
}

module.exports = {
  Node,
  Stack,
  Pseudoqueue
};
