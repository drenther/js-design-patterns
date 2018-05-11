/*
	This is a structural design pattern that composes objects into tree-like structures to represent whole-part hierarchies. In this pattern, each node in the tree-like structure can be either an individual object or a composed collection of objects. Regardless, each node is treated uniformly.

	It is a bit complex to visualize this pattern. The easiest way to think about this is with the example of a multi-level menu. Each node can be a distinct option or it can be a menu itself which has multiple options as its child. A node component with children is a composite component while a node component without any child is a leaf component.
*/

class Component {
	constructor(name) {
		this._name = name;
	}

	getNodeName() {
		return this._name;
	}

	// abstract methods that need to be overridden
	getType() {}

	addChild(component) {}

	removeChildByName(compoentName) {}

	removeChildByIndex(index) {}

	getChildByName(componentName) {}

	getChildByIndex(index) {}

	noOfChildren() {}

	static logTreeStructure(root) {
		let treeStructure = '';
		function traverse(node, indent = 0) {
			treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`;
			indent++;
			for (let i = 0, length = node.noOfChildren(); i < length; i++) {
				traverse(node.getChildByIndex(i), indent);
			}
		}

		traverse(root);
		return treeStructure;
	}
}

class Leaf extends Component {
	constructor(name) {
		super(name);
		this._type = 'Leaf Node';
	}

	getType() {
		return this._type;
	}

	noOfChildren() {
		return 0;
	}
}

class Composite extends Component {
	constructor(name) {
		super(name);
		this._type = 'Composite Node';
		this._children = [];
	}

	getType() {
		return this._type;
	}

	addChild(component) {
		this._children = [...this._children, component];
	}

	removeChildByName(componentName) {
		this._children = [...this._children].filter(component => component.getNodeName() !== componentName);
	}

	removeChildByIndex(index) {
		this._children = [...this._children.slice(0, index), ...this._children.slice(index + 1)];
	}

	getChildByName(componentName) {
		return this._children.find(component => component.name === componentName);
	}

	getChildByIndex(index) {
		return this._children[index];
	}

	noOfChildren() {
		return this._children.length;
	}
}

module.exports = {
	Component,
	Leaf,
	Composite,
};
