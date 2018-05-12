/*
	This is a structural design pattern focused on efficient data sharing through fine-grained objects. It is done for efficiency and memory conservation purposes.

	This pattern can be used for any kind of caching purposes. In fact, modern browsers use a variant of flyweight pattern to prevent loading same images twice.
*/

// flyweight class
class Icecream {
	constructor(flavour, price) {
		this.flavour = flavour;
		this.price = price;
	}
}

// factory for flyweight objects
class IcecreamFactory {
	constructor() {
		this._icecreams = [];
	}

	createIcecream(flavour, price) {
		let icecream = this.getIcecream(flavour);
		if (icecream) {
			return icecream;
		} else {
			const newIcecream = new Icecream(flavour, price);
			this._icecreams.push(newIcecream);
			return newIcecream;
		}
	}

	getIcecream(flavour) {
		return this._icecreams.find(icecream => icecream.flavour === flavour);
	}
}

module.exports = {
	IcecreamFactory,
};
