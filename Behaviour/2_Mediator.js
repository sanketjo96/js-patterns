// It enables objects to comunicate with each other
// with help of central authority

export class TrafficTower {
    constructor() {
        this.planes = []
    }

    requestPlanePosition() {
        return this.planes.map((plane) => {
            return plane.position;
        });
    }
}

export class Plane {
    constructor(tower, id, position) {
        this.id = id;
        this.position = position;
        this.tower = tower;
        this.tower.planes.push(this);
    }

    requestPosition() {
        return this.tower.requestPlanePosition()
    }
}