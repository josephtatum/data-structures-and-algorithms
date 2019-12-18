

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
    if(pref === 'dog') {
      while(!this.isEmpty()) {
        if(this.front.type === 'dog') {
          return this.front;
        } else {
          this.front = this.front.next;
        }
      }
    } else if(pref === 'cat') {
      while(!this.isEmpty()) {
        if(this.front.type === 'cat') {
          return this.front;
        } else {
          this.front = this.next;
        }
      }
    } else {
      return 'We dont have what youre looking for.';
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
