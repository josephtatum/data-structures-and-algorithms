const reverseArray = array => {
    let newArray = [];
    array.forEach(number => {
        newArray.unshift(number);
    });
    return newArray;
};

module.exports = {
    reverseArray
};
