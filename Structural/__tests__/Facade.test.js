const { ComplaintRegistry, ServiceComplaints, ProductComplaints } = require('../Facade');

describe('Facade Design Pattern Tests', function() {
	it('should register a Product Complaint', function() {
		const registry = new ComplaintRegistry();

		const report = registry.registerComplaint('John', 'product', 'manufacturing defect');
		expect(report).toEqual(
			'Complaint No. 1 reported by John regarding manufacturing defect have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.'
		);
	});

	it('should register a Service Complaint', function() {
		const registry = new ComplaintRegistry();

		const report = registry.registerComplaint('John', 'service', 'flaky service');
		expect(report).toEqual(
			'Complaint No. 2 reported by John regarding flaky service have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.'
		);
	});

	it('should work as Singleton', function() {
		const registry = new ComplaintRegistry();

		const reportService = registry.registerComplaint('Martha', 'service', 'availability');
		const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color');

		expect(reportProduct).toEqual(
			'Complaint No. 4 reported by Jane regarding faded color have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.'
		);
		expect(new ProductComplaints().complaints).toEqual([
			{ id: 1, customer: 'John', details: 'manufacturing defect' },
			{ id: 4, customer: 'Jane', details: 'faded color' },
		]);

		expect(reportService).toEqual(
			'Complaint No. 3 reported by Martha regarding availability have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.'
		);
		expect(new ServiceComplaints().complaints).toEqual([
			{ id: 2, customer: 'John', details: 'flaky service' },
			{ id: 3, customer: 'Martha', details: 'availability' },
		]);
	});
});
