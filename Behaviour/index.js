import { Observable } from "./1_Observer.js";

// Observer
const observable = new Observable()
observable.subscribe((data) => console.log('Update qty by', data))
observable.subscribe((data) => console.log('Update total by', data))

observable.setData(10);
