/*
    Factory Pattern is another class-based creational pattern. In this, we provide a generic interface that delegate the responsibility of object instantiation to its subclasses.

    This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.
*/

// ES6 Class syntax
class BallFactory {
	constructor() {
		this.createBall = function(type) {
			let ball;
			if (type === 'football' || type === 'soccer') ball = new Football();
			else if (type === 'basketball') ball = new Basketball();
			ball.roll = function() {
				console.log(`The ${this._type} is rolling.`);
			};
		};
	}
}

class Football {
	constructor() {
		this._type = 'football';
		this.kick = function() {
			console.log('You kicked the football.');
		};
	}
}

class Basketball {
	constructor() {
		this._type = 'basketball';
		this.bounce = function() {
			console.log('You bounced the basketball.');
		};
	}
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.
