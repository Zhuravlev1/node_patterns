import { IPublisher } from './Publisher'

export interface IObserver {
  // Get update from publisher
  update(publisher: IPublisher): void;
}

export class ObserverA implements IObserver {
  public update(publisher: IPublisher): void {
    if (publisher.state < 3) {
      console.log('ObserverA: Reacted to the event.');
      console.log('==============================');

    }
  }
}

export class ObserverB implements IObserver {
  public update(publisher: IPublisher): void {
    if (publisher.state === 0 || publisher.state >= 2) {
      console.log('ObserverB: Reacted to the event.');
      console.log('==============================');

    }
  }
}
