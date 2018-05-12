const { Command, SpecialMath } = require('../Command');

describe('Command Pattern Tests', function() {
	it('should return square of the number', function() {
		const x = new Command(new SpecialMath(5));
		expect(x.execute('square')).toEqual(25);
	});
	it('should return cube of the number', function() {
		const x = new Command(new SpecialMath(10));
		expect(x.execute('cube')).toEqual(1000);
	});
	it('should return square root of the number', function() {
		const x = new Command(new SpecialMath(4));
		expect(x.execute('squareRoot')).toEqual(2);
	});
	it('should record executed commands', function() {
		const x = new Command(new SpecialMath(5));
		x.execute('square');
		x.execute('cube');

		expect(x.commandsExecuted).toEqual(['square', 'cube']);
	});
});
