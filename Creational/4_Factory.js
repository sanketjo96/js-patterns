// This is the pattern to limit class instance to
// just a 1 unit

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color)
        this.wheels = 'sports'
    }
}

export class CarFactory {
    createCar(type) {
        switch(type) {
            case "cvic":
                return new Car(4, 'basic', 'red');
            case "honda": 
                return new SUV(1, 'SUV', 'red');
        }
    }
}
