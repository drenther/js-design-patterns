const { Tester, Developer } = require('../Template');

describe('Template Design Pattern Tests', function() {
	it('should work for developer', function() {
		const dev = new Developer('Nathan', 100000);
		expect(dev.getPaid()).toEqual('Nathan got paid 100000');
		expect(dev.work()).toEqual('Nathan handles application development');
	});
	it('should work for tester', function() {
		const dev = new Tester('Brian', 90000);
		expect(dev.getPaid()).toEqual('Brian got paid 90000');
		expect(dev.work()).toEqual('Brian handles testing');
	});
});
