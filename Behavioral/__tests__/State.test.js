const TrafficLight = require('../State');

describe('State Design Pattern Tests', function() {
	it('should work for all lights', function() {
		const trafficLight = new TrafficLight();

		expect(trafficLight.sign()).toEqual('GO');
		trafficLight.change();
		expect(trafficLight.sign()).toEqual('STOP');
		trafficLight.change();
		expect(trafficLight.sign()).toEqual('STEADY');
		trafficLight.change();
		expect(trafficLight.sign()).toEqual('GO');
		trafficLight.change();
		expect(trafficLight.sign()).toEqual('STOP');
	});
});
