const { addToImageCache, ProxyImage } = require('../Proxy');

describe('Proxy Design Pattern Tests', function() {
	it('should respond with target class loadImage', function() {
		const real = new ProxyImage('testImage.jpeg');

		expect(real.loadImage()).toEqual('testImage.jpeg from network');
	});
	it('should respond with proxy class loadImage', function() {
		const cached = new ProxyImage('testImage.jpeg');

		expect(cached.loadImage()).toEqual('testImage.jpeg from cache');
	});
});
