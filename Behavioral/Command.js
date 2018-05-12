/*
	This is a behavioural design pattern that aims to encapsulate actions or operations as objects. This pattern allows loose coupling of systems and classes by separating the objects that request an operation or invoke a method from the ones that execute or process the actual implementation.
*/

class SpecialMath {
	constructor(num) {
		this._num = num;
	}

	square() {
		return this._num ** 2;
	}

	cube() {
		return this._num ** 3;
	}

	squareRoot() {
		return Math.sqrt(this._num);
	}
}

class Command {
	constructor(subject) {
		this._subject = subject;
		this.commandsExecuted = [];
	}
	execute(command) {
		this.commandsExecuted.push(command);
		return this._subject[command]();
	}
}

module.exports = {
	Command,
	SpecialMath,
};
