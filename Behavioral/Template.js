/*
	This is a behavioural design pattern is based on defining the skeleton of the algorithm or implementation of an operation, but deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's outward structure.
*/

class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}

	work() {
		return `${this._name} handles ${this.responsibilities() /* gap to be filled by subclass */}`;
	}

	getPaid() {
		return `${this._name} got paid ${this._salary}`;
	}
}

class Developer extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	// details handled by subclass
	responsibilities() {
		return 'application development';
	}
}

class Tester extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	// details handled by subclass
	responsibilities() {
		return 'testing';
	}
}

module.exports = {
	Tester,
	Developer,
};
