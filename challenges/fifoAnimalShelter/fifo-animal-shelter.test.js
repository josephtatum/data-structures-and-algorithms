const { Animal, AnimalShelter } = require('./fifo-animal-shelter.js');

describe('Animal Shelter', () => {

  it('should be able to enqueue a cat', () => {
    const animalShelter = new AnimalShelter();
    const cat = new Animal('lela', 'cat');
    animalShelter.enqueue(cat);
    expect(animalShelter).toEqual({
      back: {
        name:'lela',
        next: null,
        type: 'cat'
      },
      front: {
        name:'lela',
        next: null,
        type: 'cat'
      }
    });
  });

  it('should be able to enqueue a dog', () => {
    const animalShelter = new AnimalShelter();
    const cat = new Animal('Rosie', 'dog');
    animalShelter.enqueue(cat);
    expect(animalShelter).toEqual({
      back: {
        name: 'Rosie',
        next: null,
        type: 'dog'
      },
      front: {
        name: 'Rosie',
        next: null,
        type: 'dog'
      }
    });
  });

  it('should be able to only enqueu a cat or a dog', () => {
    const animalShelter = new AnimalShelter();
    const kangaroo = new Animal('Rosie', 'Kangaroo');
    
    expect(animalShelter.enqueue(kangaroo)).toEqual('We only take cats and dogs.');
  });

  it('should be able to dequeue a dog based on a specific preference', () => {
    const animalShelter = new AnimalShelter();
    const cat = new Animal('Lela', 'cat');
    const dog = new Animal('Rosie', 'dog');
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);
    expect(animalShelter.dequeue('dog').type).toEqual('dog');
  });

  it('should be able to dequeue a cat based on a specific preference', () => {
    const animalShelter = new AnimalShelter();
    const cat = new Animal('Lela', 'cat');
    const dog = new Animal('Rosie', 'dog');
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);
    expect(animalShelter.dequeue('cat').type).toEqual('cat');
  });

  it('should return a string if what the user is looking for is not available', () => {
    const animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('kangaroo')).toEqual('We dont have what youre looking for.');
  });

});
