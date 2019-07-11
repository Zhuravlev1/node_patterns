/** Define an interface for creating an object,
* but let subclasses decide which class to instantiate.
* Factory Method lets a class defer instantiation to subclasses.*/

interface Transports {
  deliver(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Transports;

  public someOperation(): string {
    const transport = this.factoryMethod();
    return `Information about deliver: ${transport.deliver()}`;
  }
}

class CarCreator extends Creator {
  public factoryMethod(): Transports {
    return new Car();
  }
}

class Car implements Transports {
  public deliver(): string {
    return '{Product will be deliver by Car}';
  }
}


class BoatCreator extends Creator {
  public factoryMethod(): Transports {
    return new Boat();
  }
}

class Boat implements Transports {
  public deliver(): string {
    return '{Product will be deliver by Boat}';
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
