const insertShiftArray = (array, valueToBeAdded) => {

  let newArray = [];
  for(let i = array.length - 1; i >= 0; i--) {
    newArray[array.length - 1 - i] = array[i];
  }
  return newArray;

};
