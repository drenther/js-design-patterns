/*
	This pattern is an object-based creational design pattern. In this, we use a sort of a "skeleton" of an existing object to create or instantiate new objects.

	This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classical object-oriented inheritance. Hence, it plays to JavaScript's strength and is not an ineffective attempt to imitate features of other languages.
*/

// using Object.create as was recommended by ES5 standard
const car = {
	noOfWheels: 4,
	start() {
		console.log('started');
	},
	stop() {
		console.log('stopped');
	},
};

// Object.create(proto[, propertiesObject])
const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); // true
