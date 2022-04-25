// With the Command Pattern, we can decouple objects that execute a certain task 
// from the object that calls the method.

// Consider below example.
class OrderManageLegacy {
    constructor() {
      this.orders = []
    }
  
    placeOrder(order, id) {
      this.orders.push(id)
      return `You have successfully ordered ${order} (${id})`;
    }
  
    trackOrder(id) {
      return `Your order ${id} will arrive in 20 minutes.`
    }
  
    cancelOrder(id) {
      this.orders = this.orders.filter(order => order.id !== id)
      return `You have canceled your order ${id}`
    }
  }

// There are downsides to invoking the methods directly on the OrderManageLegacy instance. 
// It could happen that we decide to rename certain methods later on, or the functionality of the methods change.
// Say that instead of calling it placeOrder, we now rename it to addOrder! 
// This would mean that we would have to make sure that we don't call the placeOrder method anywhere in our codebase, 
// which could be very tricky in larger applications.

// Instead, we want to decouple the methods from the manager object, and create separate command functions for each command!

export class OrderManager {
    constructor() {
      this.orders = [];
    }
  
    execute(command, ...args) {
      return command.execute(this.orders, this, ...args);
    }
}

class Command {
    constructor(execute) {
      this.execute = execute;
    }
  }
  

export function PlaceOrderCommand(order, id) {
    return new Command(orders => {
        orders.push(order);
        console.log(`You have successfully ordered ${order} (${id})`);
    });
}
  
export function CancelOrderCommand(id) {
    return new Command((orders, ctx) => {
      ctx['orders'] = orders.filter(order => order.id !== id);
      console.log(`You have canceled your order ${id}`);
    });
}
  
export function TrackOrderCommand(id) {
    return new Command((orders) => {
        const order = orders.find(o => o.id === id);
        order ? console.log(`Your order ${id} will arrive in 20 minutes.`) :  console.log(`No Order Found`);
    })
}