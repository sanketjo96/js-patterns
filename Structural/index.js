import { CarFactoryWithMixin } from "./2_Mixins.js";
import { FlyweightCar, instanceMap } from "./4_Flyweight.js";


// Mixin
const factory = new CarFactoryWithMixin();
const civic = factory.createCar('cvic');
const honda  = factory.createCar('honda');
civic.checkEng()
honda.checkEng()

// FlyweightCar
console.log(new FlyweightCar(4, 'basic', 'red'))
console.log(new FlyweightCar(4, 'basic', 'red'))
console.log(new FlyweightCar(5, 'basic', 'red'))
console.log(instanceMap)