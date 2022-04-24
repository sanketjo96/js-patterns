// With the observer pattern, we can subscribe certain objects, the observers, to another object, 
// called the observable. Whenever an event occurs, the observable notifies all its observers!

export class Observable {
    constructor() {
     // An array of observers that will get notified whenever a specific event occurs
      this.observers = [];
      this.data = 2;
    }
  
    // A method in order to add observers to the observers list
    subscribe(func) {
      this.observers.push(func);
    }
  
    // A method in order to remove observers from the observers list
    unsubscribe(func) {
      this.observers = this.observers.filter(observer => observer !== func);
    }
  
    // A method to notify all observers whenever a specific event occurs
    notify() {
      this.observers.forEach(observer => observer(this.data));
    }

    setData(data) {
        this.data += data
        this.notify()
    }
 }

 

