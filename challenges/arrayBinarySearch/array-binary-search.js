const binarySearch = (array, key) => {
    let index = 0;
    for(let i = 0; i < array.length; i++) {

        if(array[i] === key) {
            return index;
        }

        index++;
    }
    return -1;
};

module.exports = { binarySearch };
