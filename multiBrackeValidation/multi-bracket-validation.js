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

const validator = (string) => {

  if(typeof string !== 'string') {
    return 'that is not a string!';
  }

  const stack = new Stack();

  for(let i = 0; i < string.length; i++) {
    const aValue = new Node(string[i]);

    if(aValue === '{' || aValue === '[' || aValue === '(') {
      stack.push(aValue);
    } else if(aValue === '}' || aValue === '}' || aValue === ')') {
      stack.pop(aValue);
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
    }
    console.log(stack)
    if(stack.isEmpty()) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = { validator };
