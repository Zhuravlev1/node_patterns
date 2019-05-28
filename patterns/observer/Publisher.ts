import { IObserver } from './Observer'

export interface IPublisher {
  // Присоединяет наблюдателя к издателю.
  subscribe(observer: IObserver): void;

  // Отсоединяет наблюдателя от издателя.
  unsubscribe(observer: IObserver): void;

  // Уведомляет всех наблюдателей о событии.
  notifyObservers(): void;

  state: number;
}

export class Publisher implements IPublisher {
  public state: number;
  private observers: IObserver[] = [];

  public subscribe(observer: IObserver): void {
    console.log('An observer was subscribed');
    this.observers.push(observer);
  }

  public unsubscribe(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
    console.log('An observer was Unsubscribed');
  }

  public notifyObservers(): void {
    console.log('Notify observers');
    console.log('==============================');

    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log('==============================');
    console.log('I am doing something important');
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Publisher: My state has just changed to: ${this.state}`);
    console.log('==============================');

    this.notifyObservers();
  }
}