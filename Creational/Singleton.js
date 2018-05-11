/*
	Singleton is a special creational design pattern where only one instance of a class can exist. It works like this - if no instance of the singleton class exists then a new instance is created and returned but if an instance already exists then the reference to the existing instance is returned.

	In real-life example, mongoose (the famous Node.js ODM library for MongoDB) utilizes the singleton pattern.
*/

// ES6 Class syntax
class Database {
	constructor(data) {
		if (Database.exists) {
			return Database.instance;
		}
		this._data = data;
		Database.instance = this;
		Database.exists = true;
		return this;
	}

	getData() {
		return this._data;
	}

	setData(data) {
		this._data = data;
	}
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo
