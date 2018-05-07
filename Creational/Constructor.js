/*
	Constructors are special function that can be used instantiate new objects with methods and properties defined by that function.

	Constructor pattern is the most commonly used pattern in JavaScript for creating new objects of similiar kind. 
*/

// Constructor function with ES5 syntax
function Hero(name, specialAbility) {
	// setting property values
	this.name = name;
	this.specialAbility = specialAbility;

	// declaring a method on the object
	this.getDetails = function() {
		return `${this.name} can ${this.specialAbility}`;
	};
}

// constructor with ES6 Class based syntax
class Hero {
	constructor(name, specialAbility) {
		// setting property values
		this.name = name;
		this.specialAbility = specialAbility;

		// declaring a method on the object
		this.getDetails = function() {
			return `${this.name} can ${this.specialAbility}`;
		};
	}
}

// creating new instances of Hero
const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails()); // Iron Man can fly
