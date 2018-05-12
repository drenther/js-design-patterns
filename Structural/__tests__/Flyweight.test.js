const { IcecreamFactory } = require('../Flyweight');

describe('Flweight Design Pattern Tests', function() {
	it('should create flyweight icecream objects', function() {
		const factory = new IcecreamFactory();

		const vanilla = factory.createIcecream('vanilla', 10);
		expect(vanilla.constructor.name).toEqual('Icecream');
		expect(vanilla.flavour).toEqual('vanilla');
		expect(vanilla.price).toEqual(10);
	});
	it('should return created flyweight icecream objects', function() {
		const factory = new IcecreamFactory();

		factory.createIcecream('chocolate', 15);
		const chocolate = factory.getIcecream('chocolate');
		expect(chocolate.constructor.name).toEqual('Icecream');
		expect(chocolate.flavour).toEqual('chocolate');
		expect(chocolate.price).toEqual(15);
	});
	it('should not create duplicate objects', function() {
		const factory = new IcecreamFactory();

		const chocoVanilla = factory.createIcecream('chocolate and vanilla', 15);
		const vanillaChoco = factory.createIcecream('chocolate and vanilla', 15);
		expect(chocoVanilla).toBe(vanillaChoco);
	});
});
