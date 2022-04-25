import { Observable } from "./1_Observer.js";
import { Plane, TrafficTower } from "./2_Mediator.js";
import { OrderManager, PlaceOrderCommand, TrackOrderCommand, CancelOrderCommand } from "./3_Command.js";

// Observer
const observable = new Observable()
observable.subscribe((data) => console.log('Update qty by', data))
observable.subscribe((data) => console.log('Update total by', data))

observable.setData(10);

// Mediator
const t = new TrafficTower()
const p1 = new Plane(t, 'PNR456', '10,12')
const p2 = new Plane(t, 'PNR123', '11,17')
console.log(p1.requestPosition())
console.log(p2.requestPosition())


// Command
const orderManager = new OrderManager()
orderManager.execute(PlaceOrderCommand({id: 1, item: 'Bhelpuri', amt: 100}, 1))
orderManager.execute(PlaceOrderCommand({id: 2, item: 'Pav Bhaji', amt: 200}, 2))

orderManager.execute(TrackOrderCommand(1))
orderManager.execute(CancelOrderCommand(1))
orderManager.execute(TrackOrderCommand(1))

