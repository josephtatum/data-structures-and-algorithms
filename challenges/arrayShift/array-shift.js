const insertShiftArray = (array, valueToBeAdded) => {

  let newArray = new Array(array.length + 1);
  let x = 0;
  const middleIndex = Math.ceil((array.length / 2) - 1);
  for(let i = 0; i < array.length; i++) {
    newArray[x] = array[i];
    x++;
    if(i === middleIndex) {
      newArray[x] = valueToBeAdded;
      x++;
    }
  }
  console.log(newArray);
  return newArray;

};

module.exports = { insertShiftArray };
