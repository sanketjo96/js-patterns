// Sometimes its way much handy to mix functions externally to
// class for required functionality. Mixin pattern is way to that

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

export class CarFactoryWithMixin {
    createCar(type) {
        switch(type) {
            case "cvic":
                return new Car(4, 'basic', 'red');
            case "honda": 
                return new SUV(1, 'SUV', 'red');
        }
    }
}

let engineCheckMixin = {
    checkEng() {
        console.log(`The engine ${this.engine} is doing vroom vroom!!!`)
    }
}

Object.assign(Car.prototype, engineCheckMixin)
