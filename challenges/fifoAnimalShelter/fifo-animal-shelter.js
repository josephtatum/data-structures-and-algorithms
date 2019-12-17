class Animal {
  constructor(name, type, next = null) {
    this.name = name,
    this.type = type,
    this.next = next;
  }
}

class AnimalShelter {

  constructor() {
    this.front = null,
    this.back = null;
  }

  enqueue(animal) {

    if(animal.type === 'dog' || animal.type === 'cat'){
      
      if(this.isEmpty()) {
        this.front = animal;
      } else {
        this.back.next = animal;
      }
      this.back = animal;
    } else {
      return 'We only take cats and dogs.';
    }
  }

  dequeue(pref) {
    if(pref === 'dog' || pref === 'cat') {
      console.log(pref);
    } else {
      return null;
    }
  }

    isEmpty() {
      return !this.front;
    }
}

module.exports = {
  Animal,
  AnimalShelter
};
