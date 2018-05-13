/*
	It is a behavioural design pattern that allows an object to alter its behaviour based on changes to its internal state. The object returned by a State pattern class seems to change its class.
*/

class TrafficLight {
	constructor() {
		this.states = [new GreenLight(), new RedLight(), new YellowLight()];
		this.current = this.states[0];
	}

	change() {
		const totalStates = this.states.length;
		let currentIndex = this.states.findIndex(light => light === this.current);
		if (currentIndex + 1 < totalStates) this.current = this.states[currentIndex + 1];
		else this.current = this.states[0];
	}

	sign() {
		return this.current.sign();
	}
}

class Light {
	constructor(light) {
		this.light = light;
	}
}

class RedLight extends Light {
	constructor() {
		super('red');
	}

	sign() {
		return 'STOP';
	}
}

class YellowLight extends Light {
	constructor() {
		super('yellow');
	}

	sign() {
		return 'STEADY';
	}
}

class GreenLight extends Light {
	constructor() {
		super('green');
	}

	sign() {
		return 'GO';
	}
}

module.exports = TrafficLight;
