/*
	This is a behavioural design pattern that provides a chain of loosely coupled objects. Each of these objects can choose to act on or handle the request of the client.

	A good example of the chain of responsibility pattern is the event bubbling in DOM in which an event propagates through a series of nested DOM elements, one of which may have an "eventlistener" attached to listen and act on the event.
*/
class CumulativeSum {
	constructor(intialValue = 0) {
		this.sum = intialValue;
	}

	add(value) {
		this.sum += value;
		return this;
	}
}

module.exports = {
	CumulativeSum,
};
