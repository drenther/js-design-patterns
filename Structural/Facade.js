/*
	This is a structural design pattern that is widely used in the JavaScript libraries. It is used to provide a unified and simpler public facing interface for ease of use that shields away from the complexities of its consisting subsystems or subclasses.
*/

let currentId = 0;

class ComplaintRegistry {
	registerComplaint(customer, type, details) {
		const id = ComplaintRegistry._uniqueIdGenerator();
		let registry;
		if (type === 'service') {
			registry = new ServiceComplaints();
		} else {
			registry = new ProductComplaints();
		}
		return registry.addComplaint({ id, customer, details });
	}

	static _uniqueIdGenerator() {
		return ++currentId;
	}
}

class Complaints {
	constructor() {
		this.complaints = [];
	}

	addComplaint(complaint) {
		this.complaints.push(complaint);
		return this.replyMessage(complaint);
	}

	getComplaint(id) {
		return this.complaints.find(complaint => complaint.id === id);
	}

	replyMessage(complaint) {}
}

class ProductComplaints extends Complaints {
	constructor() {
		super();
		if (ProductComplaints.exists) {
			return ProductComplaints.instance;
		}
		ProductComplaints.instance = this;
		ProductComplaints.exists = true;
		return this;
	}

	replyMessage({ id, customer, details }) {
		return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
	}
}

class ServiceComplaints extends Complaints {
	constructor() {
		super();
		if (ServiceComplaints.exists) {
			return ServiceComplaints.instance;
		}
		ServiceComplaints.instance = this;
		ServiceComplaints.exists = true;
		return this;
	}

	replyMessage({ id, customer, details }) {
		return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.`;
	}
}

module.exports = {
	ComplaintRegistry,
	ProductComplaints,
	ServiceComplaints,
};

// usage
/*
	const registry = new ComplaintRegistry();

	const reportService = registry.registerComplaint('Martha', 'service', 'availability');
	// 'Complaint No. 1 reported by Martha regarding availability have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.'

	const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color');
	// 'Complaint No. 2 reported by Jane regarding faded color have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.'
*/
