/*
	This is a structural pattern where the interface of one class is translated to another. This pattern lets classes work together that could not otherwise because of incompatible interfaces.

	This pattern is often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them.
*/

// old interface
class OldCalculator {
	constructor() {
		this.operations = function(term1, term2, operation) {
			switch (operation) {
				case 'add':
					return term1 + term2;
				case 'sub':
					return term1 - term2;
				default:
					return NaN;
			}
		};
	}
}

// new interface
class NewCalculator {
	constructor() {
		this.add = function(term1, term2) {
			return term1 + term2;
		};
		this.sub = function(term1, term2) {
			return term1 - term2;
		};
	}
}

// Adapter Class
class CalcAdapter {
	constructor() {
		const newCalc = new NewCalculator();

		this.operations = function(term1, term2, operation) {
			switch (operation) {
				case 'add':
					// using the new implementation under the hood
					return newCalc.add(term1, term2);
				case 'sub':
					return newCalc.sub(term1, term2);
				default:
					return NaN;
			}
		};
	}
}

// usage
/*
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add')); // 15;
*/

module.exports = {
	OldCalculator,
	NewCalculator,
	CalcAdapter,
};
