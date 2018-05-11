const car = require('../Prototype');

describe('Prototype Design Pattern Tests', function() {
	it('should create an object with prototype', function() {
		const myCar = Object.create(car, { owner: { value: 'John' } });

		expect(myCar.noOfWheels).toEqual(4);
		expect(myCar.start()).toEqual('started');
		expect(myCar.stop()).toEqual('stopped');
		expect(myCar.owner).toEqual('John');
		expect(myCar.__proto__).toEqual(car);
	});
});
