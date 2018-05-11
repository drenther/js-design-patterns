const Database = require('../Singleton');

describe('Singleton Design Pattern Tests', function() {
	it('should instantiate only one instance', function() {
		const mongo = new Database('mongo');
		const mysql = new Database('mysql');

		expect(mongo.getData()).toBe('mongo');
		expect(mysql.getData()).toBe('mongo');
		expect(mongo).toEqual(mysql);
	});
});
