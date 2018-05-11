const { Component, Composite, Leaf } = require('../Composite');

describe('Composite Design Pattern Tests', function() {
	it('should be a composite component with no children', function() {
		const root = new Composite('root');

		expect(root.constructor.name).toBe('Composite');
		expect(root.getType()).toBe('Composite Node');
		expect(root.getNodeName()).toBe('root');
		expect(root.noOfChildren()).toEqual(0);
	});

	it('should be a leaf component', function() {
		const leaf = new Leaf('leaf');

		expect(leaf.constructor.name).toBe('Leaf');
		expect(leaf.getType()).toBe('Leaf Node');
		expect(leaf.getNodeName()).toBe('leaf');
		expect(leaf.noOfChildren()).toEqual(0);
	});

	it('should add child', function() {
		const node = new Composite('node');
		node.addChild(new Leaf('left'));
		expect(node.noOfChildren()).toEqual(1);
		node.addChild(new Leaf('right'));
		expect(node.noOfChildren()).toEqual(2);
	});

	it('should remove child by name', function() {
		const node = new Composite('node');
		node.addChild(new Leaf('left'));
		node.addChild(new Composite('right'));
		expect(node.noOfChildren()).toEqual(2);
		node.removeChildByName('right');
		expect(node.noOfChildren()).toEqual(1);
	});

	it('should remove child by index', function() {
		const node = new Composite('node');
		node.addChild(new Leaf('left'));
		node.addChild(new Composite('middle'));
		node.addChild(new Leaf('right'));
		expect(node.noOfChildren()).toEqual(3);
		node.removeChildByIndex(1);
		expect(node.noOfChildren()).toEqual(2);
	});

	it('should log the correct tree structure', function() {
		const tree = new Composite('root');
		tree.addChild(new Leaf('left'));
		const right = new Composite('right');
		tree.addChild(right);
		right.addChild(new Leaf('right-left'));
		const rightMid = new Composite('right-middle');
		right.addChild(rightMid);
		right.addChild(new Leaf('right-right'));
		rightMid.addChild(new Leaf('left-end'));
		rightMid.addChild(new Leaf('right-end'));

		expect(Component.logTreeStructure(tree)).toEqual(
			'root\n--left\n--right\n----right-left\n----right-middle\n------left-end\n------right-end\n----right-right\n'
		);
	});
});
