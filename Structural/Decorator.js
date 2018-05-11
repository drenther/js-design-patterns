/*
	This is also a structural design pattern that focuses on the ability to add behaviour or functionalities to existing classes dynamically. It is another viable alternative to sub-classing.

	The decorator type behaviour is very easy to implement in JavaScript because JavaScript allows us to add methods and properties to object dynamically. The simplest approach would be to just add a property to an object but it will not be reusable for the other objects of the same class.
*/

class Car {
	constructor(model) {
		this._model = model;
	}
}

const 