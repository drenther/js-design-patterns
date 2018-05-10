/*
    Factory Pattern is another class-based creational pattern. In this, we provide a generic interface that delegate the responsibility of object instantiation to its subclasses.

    This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.
*/

// ES6 Class syntax
class BallFactory {
	constructor() {
		this.createBall = function(type) {
			let ball;
			if (type === 'football' || type === 'soccer') ball = new FootBall();
			else if (type === 'basketball') ball = new BasketBall();
			ball.roll = function() {
				console.log(`The ${this.type} is rolling.`);
			};
		};
	}
}

class FootBall {
	constructor() {
		this.type = 'football';
		this.kick = function() {
			console.log('You kicked the football.');
		};
	}
}

class BasketBall {
	constructor() {
		this.type = 'basketball';
		this.bounce = function() {
			console.log('You bounced the basketball.');
		};
	}
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketBall = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketBall.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketBall.bounce()); // You bounced the basketball.
