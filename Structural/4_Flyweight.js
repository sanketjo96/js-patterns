// Pattern to method to minimize recreation of 
// same item/thing twice and so mizimizing mem impact
// Example - browser caches images. 

export let instanceMap = {};
export class FlyweightCar {
    constructor(doors, engine, color) {
        const carKey = `${doors}-${engine}-${color}`;
        if (!instanceMap[carKey]) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instanceMap[carKey] = this;
        } else {
            return instanceMap[carKey];
        }
    }
}