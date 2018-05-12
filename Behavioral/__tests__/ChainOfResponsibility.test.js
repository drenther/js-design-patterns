const CumulativeSum = require('../ChainOfResponsibility');

describe('Chain of Responsibility Pattern Tests', function() {
	it('is chain working with zero initial', function() {
		const sum = new CumulativeSum();
		expect(
			sum
				.add(10)
				.add(2)
				.add(50).sum
		).toEqual(62);
	});

	it('is chain working with an initial value', function() {
		const sum = new CumulativeSum(10);
		expect(
			sum
				.add(10)
				.add(20)
				.add(5).sum
		).toEqual(45);
	});
});
