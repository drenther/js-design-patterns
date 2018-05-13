/*
	It is a crucial behavioural design pattern that defines one-to-many dependencies between objects so that when one object (publisher) changes its state, all the other dependent objects (subscribers) are notified and updated automatically. This is also called PubSub (Publisher/Subscribers) or Event Dispatcher/Listeners Pattern. The Publisher is sometimes called Subject and the Subscribers are sometimes called Observers.
*/

class Subject {
	constructor() {
		this._observers = [];
	}

	subscribe(observer) {
		this._observers.push(observer);
	}

	unsubscribe(observer) {
		this._observers = this._observers.filter(obs => observer !== obs);
	}

	fire(change) {
		this._observers.forEach(observer => {
			observer.update(change);
		});
	}
}

class Observer {
	constructor(state) {
		this.state = state;
		this.initialState = state;
	}

	update(change) {
		let state = this.state;
		switch (change) {
			case 'INC':
				this.state = ++state;
				break;
			case 'DEC':
				this.state = --state;
				break;
			default:
				this.state = this.initialState;
		}
	}
}

module.exports = {
	Subject,
	Observer,
};
