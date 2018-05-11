const { BallFactory } = require('../Factory');

describe('Factory Design Pattern Tests', function() {
	it('should create Basketball object', function() {
		const factory = new BallFactory();

		const ball = factory.createBall('basketball');

		expect(ball.constructor.name).toEqual('Basketball');
		expect(ball.roll()).toEqual('The basketball is rolling.');
		expect(ball.bounce()).toEqual('You bounced the basketball.');
	});

	it('should create Football object if passed soccer', function() {
		const factory = new BallFactory();

		const ball = factory.createBall('soccer');

		expect(ball.constructor.name).toEqual('Football');
		expect(ball.roll()).toEqual('The football is rolling.');
		expect(ball.kick()).toEqual('You kicked the football.');
	});

	it('should create Football object if passed football', function() {
		const factory = new BallFactory();

		const ball = factory.createBall('football');

		expect(ball.constructor.name).toEqual('Football');
		expect(ball.roll()).toEqual('The football is rolling.');
		expect(ball.kick()).toEqual('You kicked the football.');
	});
});
