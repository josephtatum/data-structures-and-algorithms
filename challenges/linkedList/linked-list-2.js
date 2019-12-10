class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;

    }

    includes(value) {
        while(this.head.value === value) {
            return true;
        }
        return false;
    }

    toString() {

    }

    append(value) {

    }

    insertBefore(before, value) {

    }

    insertAfter(after, value) {

    }
}

module.exports = { LinkedList, Node };
