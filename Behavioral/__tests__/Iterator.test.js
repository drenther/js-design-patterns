const { IteratorClass, iteratorUsingGenerator } = require('../Iterator');

describe('Iterator Pattern Tests', function() {
	it('should work using Iterator', function() {
		const arr = ['Hi', 'Hello', 'Bye'];
		const collection = new IteratorClass(arr);

		let i = 0;
		for (const val of collection) {
			expect(val).toEqual(arr[i++]);
		}
	});

	it('should work using Generator', function() {
		const gen = iteratorUsingGenerator(['Hi', 'Hello', 'Bye']);

		expect(gen.next().value).toEqual('Hi');
		expect(gen.next().value).toEqual('Hello');
		expect(gen.next().value).toEqual('Bye');
	});
});
