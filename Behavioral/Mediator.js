/*
	It is a behavioural design pattern that encapsulates how a set of object interact with each other. It provides the central authority over a group of objects by promoting loose coupling by keeping objects from referring each other explicitly.
*/

class TrafficTower {
	constructor() {
		this._airplanes = [];
	}

	register(airplane) {
		this._airplanes.push(airplane);
		airplane.register(this);
	}

	requestCoordinates(airplane) {
		return this._airplanes.filter(plane => airplane !== plane).map(plane => plane.coordinates);
	}
}

class Airplane {
	constructor(coordinates) {
		this.coordinates = coordinates;
		this.trafficTower = null;
	}

	register(trafficTower) {
		this.trafficTower = trafficTower;
	}

	requestCoordinates() {
		if (this.trafficTower) return this.trafficTower.requestCoordinates(this);
		return null;
	}
}

module.exports = {
	TrafficTower,
	Airplane,
};
