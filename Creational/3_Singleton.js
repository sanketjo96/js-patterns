// This is the pattern to limit class instance to
// just a 1 unit

let instance = null;
export class SingletonCar {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}