const { NewCalculator, OldCalculator, CalcAdapter } = require('../Adapter');

describe('Adapter Design Pattern Tests', function() {
	it('should add', function() {
		const oldCalc = new OldCalculator();
		expect(oldCalc.operations(10, 5, 'add')).toEqual(15);

		const newCalc = new NewCalculator();
		expect(newCalc.add(10, 5)).toEqual(15);

		const adaptedCalc = new CalcAdapter();
		expect(adaptedCalc.operations(10, 5, 'add')).toEqual(15);
	});

	it('should subtract', function() {
		const oldCalc = new OldCalculator();
		expect(oldCalc.operations(10, 5, 'sub')).toEqual(5);

		const newCalc = new NewCalculator();
		expect(newCalc.sub(10, 5)).toEqual(5);

		const adaptedCalc = new CalcAdapter();
		expect(adaptedCalc.operations(10, 5, 'sub')).toEqual(5);
	});
});
