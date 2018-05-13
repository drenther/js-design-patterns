const { Subject, Observer } = require('../Observer');

const sub = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(20);

describe('Observer Design Pattern Tests', function() {
	beforeEach(function() {
		sub.subscribe(obs1);
		sub.subscribe(obs2);
	});
	afterEach(function() {
		sub.unsubscribe(obs1);
		sub.unsubscribe(obs2);
	});
	it('increment should work', function() {
		sub.fire('INC');
		expect(obs1.state).toEqual(2);
		expect(obs2.state).toEqual(21);
	});
	it('decrement should work', function() {
		sub.fire('DEC');
		sub.fire('DEC');
		expect(obs1.state).toEqual(0);
		expect(obs2.state).toEqual(19);
	});
	it('reset should work', function() {
		sub.fire('DEC');
		sub.fire('DEC');
		sub.fire('DEC');
		sub.fire();
		expect(obs1.state).toEqual(1);
		expect(obs2.state).toEqual(20);
	});
	it('unsubscribe should work', function() {
		sub.unsubscribe(obs2);
		sub.fire('INC');
		expect(obs1.state).toEqual(2);
		expect(obs2.state).toEqual(20);
		sub.subscribe(obs2);
	});
});
