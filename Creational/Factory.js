/*
    Factory Pattern is another class-based creational pattern. In this, we provide a generic interface that delegate the responsibility of object instantiation to its subclasses.

    This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.
*/

// ES5
function BallFactory() {
	this.createBall = function(type) {
		var ball;

		if (type === 'football' || type === 'soccer') ball = new FootBall();
		else if (type === 'basketball') ball = new BasketBall();

		ball.roll = function() {
			console.log('The ' + this.type + ' is rolling.');
		};
	};
}

function FootBall() {
	this.type = 'Football';

	this.kick = function() {
		console.log('You kicked the football.');
	};
}

function BasketBall() {
	this.type = 'BasketBall';

	this.bounce = function() {
		console.log('You bounced the basketball.');
	};
}

// ES6
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

// usage
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketBall = factory.createBall('basketball');

console.log(myFootball.roll); // The ootball is rolling.
console.log(myBasketBall.roll); // The basketball is rolling.
console.log(myFootball.kick); // You kicked the football.
console.log(myBasketBall.kick); // You kicked the basketball.
