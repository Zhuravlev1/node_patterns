/** Define an interface for creating an object,
* but let subclasses decide which class to instantiate.
* Factory Method lets a class defer instantiation to subclasses.*/

interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class CarCreator extends Creator {
  public factoryMethod(): Product {
    return new Car();
  }
}

class Car implements Product {
  public operation(): string {
    return '{Result of the Car}';
  }
}


class BoatCreator extends Creator {
  public factoryMethod(): Product {
    return new Boat();
  }
}

class Boat implements Product {
  public operation(): string {
    return '{Result of the Boat}';
  }
}


function clientCode(creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  console.log(creator.someOperation());
}

console.log('App: Launched with the CarCreator.');
clientCode(new CarCreator());
console.log('');

console.log('App: Launched with the BoatCreator.');
clientCode(new BoatCreator());
