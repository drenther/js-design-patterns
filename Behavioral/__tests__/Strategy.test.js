const { PersonalCar, Taxi, Bus, Commute } = require('../Strategy');

const commute = new Commute();

describe('Strategy Design Pattern Tests', function() {
	it('should work for taxi', function() {
		expect(commute.travel(new Taxi())).toEqual(5);
	});
	it('should work for bus', function() {
		expect(commute.travel(new Bus())).toEqual(10);
	});
	it('should work for personal car', function() {
		expect(commute.travel(new PersonalCar())).toEqual(3);
	});
});
