const { Animal, AnimalShelter } = require('./fifo-animal-shelter.js');

describe('Animal Shelter', () => {

  it('should be able to enqueue a cat or dog', () => {
    const animalShelter = new AnimalShelter();
    const cat = new Animal('lela', 'cat');
    const dog = new Animal('Rosie', 'dog');
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);
    console.log(animalShelter)
  });

});
