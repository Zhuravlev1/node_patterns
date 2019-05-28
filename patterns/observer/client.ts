import { Publisher } from './Publisher'
import { ObserverA, ObserverB } from './Observer'

const publisher = new Publisher();

const observer1 = new ObserverA();
publisher.subscribe(observer1);

const observer2 = new ObserverB();
publisher.subscribe(observer2);

publisher.someBusinessLogic();
publisher.unsubscribe(observer2);

publisher.someBusinessLogic();