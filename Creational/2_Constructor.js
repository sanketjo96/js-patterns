// This is the pattern to share creational details
// from other relational class while objectte creation.

export class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

export class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color)
        this.wheels = 'sports'
    }
}