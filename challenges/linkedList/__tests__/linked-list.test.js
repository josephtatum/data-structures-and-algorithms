const { LinkedList, Node } = require('../linked-list-2.js');

describe('linked list tests', () => {

    it('instantiates a new list', () => {
        const newList = new LinkedList;
        expect(newList).toBeNull;
    });

    it('inserts into the list', () => {
        const newNode = new Node(5);
        const newList = new LinkedList;
        newList.insert(newNode);
        expect(newList).toEqual({
            'head': {
                'next': null,
                'value': {
                    'next': null, 'value': 5
                }
            },
            'length': 1
        });
    });
});
