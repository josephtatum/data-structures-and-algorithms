class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.insert(value);
    }

    insert(value) {
    //adds new node with that value at the head
        const newNode = new Node(value, this.head);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    includes(value) {
        let thisNode = this.head;

        while(thisNode) {
            if(thisNode.value === value) {
                return true;
            } else return false;
        }
    }

    toString() {
        let thisNode = this.head;
        let arrayToString = [];
        while(thisNode) {
            arrayToString.push(thisNode.value);
            thisNode = thisNode.next;
        }
        let stringList = arrayToString.toString();
        return stringList;
    }

}


module.exports = { Node, LinkedList };
