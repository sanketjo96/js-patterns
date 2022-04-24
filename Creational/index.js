import { Car } from "./1_Class.js";
import { SUV } from "./2_Constructor.js";
import { SingletonCar } from "./3_Singleton.js";
import { CarFactory } from "./4_Factory.js";

// Class
console.log(new Car(4, 'basic', 'red'))


// Constructor
console.log(new SUV(4, 'SUV', 'red'))


// Singleton
console.log(new SingletonCar(4, 'basic', 'red'))
console.log(new SingletonCar(5, 'basic', 'red'))


// Factory
const factory = new CarFactory();
console.log(factory.createCar('cvic'))
console.log(factory.createCar('honda'))