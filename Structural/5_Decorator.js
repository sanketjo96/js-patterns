// Pattern which is very simlar to mixins where we
// decorate the classes by the code comming from other area.

// Guess what, this is very much similar to the mixin pattern. The only differane
// is its more delarative in nature.


// EXMPLE WONT WORK ACTUALLY, AS DECORATORS ARE NOT OFFICIAL TO JS

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    //WONT WORK NOW, SHOULD WORK WITH TS
    @engineCheckMixin
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

    //WONT WORK NOW, SHOULD WORK WITH TS
    @engineCheckMixin
}

let engineCheckMixin = {
    checkEng() {
        console.log(`The engine ${this.engine} is doing vroom vroom!!!`)
    }
}

// RATHER THAT THIS LINE WE CALL @engineCheckMixin IN CLASS RIGHTAWAY
// Object.assign(Car.prototype, engineCheckMixin)