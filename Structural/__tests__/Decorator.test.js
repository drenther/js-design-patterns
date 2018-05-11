const { Book, giftWrap, hardbindBook } = require('../Decorator');

describe('Decorator Design Pattern Test', function() {
	it('should be gift wrapped', function() {
		const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10));

		expect(alchemist.isGiftWrapped).toBeTruthy();
		expect(alchemist.unwrap()).toEqual('Unwrapped The Alchemist by Paulo Coelho');
	});

	it('should be hard bound', function() {
		const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15));

		expect(inferno.isHardbound).toBeTruthy();
		expect(inferno.price).toEqual(20);
	});
});
