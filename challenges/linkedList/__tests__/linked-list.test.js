const { LinkedList, Node } = require('../linked-list-2.js');

describe('linked list tests', () => {

    it('instantiates a new list', () => {
        const newList = new LinkedList;
        expect(newList).toBeNull;
    });

    it('inserts into the list', () => {
        const newNode = new Node(5, 4);
        const newList = new LinkedList;
        newList.insert(newNode);
        console.log(newList);
        expect(newList).toEqual({ 'head': { 'next': null, 'value': 5 }, 'length': 0 });
    });
});
