/*
	It is a behavioural design pattern that allows encapsulation of alternative algorithms for a particular task. It defines a family of algorithms and encapsulates them in such a way that they are interchangeable at runtime without client interference or knowledge. 
*/

// encapsulation
class Commute {
	travel(transport) {
		return transport.travelTime();
	}
}

class Vehicle {
	travelTime() {
		return this._timeTaken;
	}
}

// strategy 1
class Bus extends Vehicle {
	constructor() {
		super();
		this._timeTaken = 10;
	}
}

// strategy 2
class Taxi extends Vehicle {
	constructor() {
		super();
		this._timeTaken = 5;
	}
}

// strategy 3
class PersonalCar extends Vehicle {
	constructor() {
		super();
		this._timeTaken = 3;
	}
}

module.exports = {
	Commute,
	Bus,
	Taxi,
	PersonalCar,
};
