const Hero = require('../Constructor');

describe('Constructor Design Pattern Tests', function() {
	it('should instantiate and the method call must work', function() {
		const IronMan = new Hero('Iron Man', 'fly');

		expect(IronMan.getDetails()).toBe('Iron Man can fly');
	});
});
