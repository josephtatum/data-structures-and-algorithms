// class Node {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next || null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = null;
//         this.length = 0;
//         this.insert(value);
//     }

//     insert(value) {
//         const newNode = new Node(value, this.head);
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     includes(value) {
//         let thisNode = this.head;
//         while(thisNode) {
//             if(thisNode.value === value) {
//                 return true;
//             } else return false;
//         }
//     }

//     toString() {
//         let thisNode = this.head;
//         let arrayToString = [];
//         while(thisNode) {
//             arrayToString.push(thisNode.value);
//             thisNode = thisNode.next;
//         }
//         let stringList = arrayToString.toString();
//         return stringList;
//     }

//     append(value) {
//         let thisNode = new Node(value);
//         let currentNode = this.head;
//         while(currentNode.next !== null) {
//             currentNode = currentNode.next;
//         }
//         currentNode.next = thisNode;

//     }

//     insertBefore(value, newVal) {

//     }

//     insertAfter(value, newVal) {

//     }

// }


// module.exports = { Node, LinkedList };
