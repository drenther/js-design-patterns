const { TrafficTower, Airplane } = require('../Mediator');

describe('Mediator Pattern Tests', function() {
	it('should work correctly', function() {
		const tower = new TrafficTower();

		const airplanes = [new Airplane(10), new Airplane(20), new Airplane(30)];
		airplanes.forEach(airplane => {
			tower.register(airplane);
		});

		const expectedCoordinates = [[20, 30], [10, 30], [10, 20]];
		let i = 0;
		airplanes.map(airplane => airplane.requestCoordinates()).forEach(setOfCoordinates => {
			expect(setOfCoordinates).toEqual(expectedCoordinates[i++]);
		});
	});
});
