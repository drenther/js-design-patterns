/*
	Constructors are special function that can be used to instantiate new objects with methods and properties defined by that function.

	Constructor pattern is the most commonly used pattern in JavaScript for creating new objects of similiar kind.
*/

// traditional Function-based syntax
/*
function Hero(name, specialAbility) {
	// setting property values
	this.name = name;
	this.specialAbility = specialAbility;

	// declaring a method on the object
	this.getDetails = function() {
		return this.name + ' can ' + this.specialAbility;
	};
}
*/

// ES6 Class syntax
class Hero {
	constructor(name, specialAbility) {
		// setting property values
		this._name = name;
		this._specialAbility = specialAbility;

		// declaring a method on the object
		this.getDetails = function() {
			return `${this._name} can ${this._specialAbility}`;
		};
	}
}

// creating new instances of Hero
const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails()); // Iron Man can fly

export default Hero;
