describe('The Controller module', function() {
	it('Should be able to have an Diagram ', function() {
		expect(dfns.controller).toBeDefined();
	});

}); //end describe

describe("The Command factory ", function() {
	it("should be defined", function() {
		expect(dfns.commandFactory).toBeDefined();
	});
	it("should have a create entity command", function() {
		expect(dfns.CreateEntityCommand).toBeDefined();
	});
	it("should have a create attribute entity command", function() {
		expect(dfns.CreateEntityAttributeCommand).toBeDefined();
	});
	it("should have a create operation entity command", function() {
		expect(dfns.CreateEntityOperationCommand).toBeDefined();
	});



	it("should create a create entity command when the user enters: create entity entity name", function() {
		var command = dfns.commandFactory.getCommand("create entity entityName");
		expect(dfns.CreateEntityCommand).toEqual(command.constructor);
		expect("entityName").toEqual(command.commandLine);
	});
	it("should create a create attribute command  the user enters: create attribute entityName:AttributeName", function() {
		var command = dfns.commandFactory.getCommand("create attribute entityName:attributeName");
		expect(dfns.CreateEntityAttributeCommand).toEqual(command.constructor);
		expect("entityName:attributeName").toEqual(command.commandLine);
	});

});


describe("The Create Entity Command  ", function() {
	beforeEach(function() {
		window.diagram = new dfns.Diagram();
	});
	it("should create an entity when executed", function() {
		var command = new dfns.CreateEntityCommand("Person");
		expect(command.execute()).toEqual(true);
		expect(window.diagram.entities.length).toEqual(1);
		expect(window.diagram.entities[0].name).toEqual("Person");
	});
	it("should return false if entity already exists", function() {
		window.diagram.addEntity(new dfns.Entity("Person"));
		expect(window.diagram.entities.length).toEqual(1);

		var command = new dfns.CreateEntityCommand("Person");
		expect(false).toEqual(command.execute());

		expect(window.diagram.entities.length).toEqual(1);
	});
});

describe("The Create Attribute Command  ", function() {
	var entity;
	beforeEach(function() {
		window.diagram = new dfns.Diagram();
		entity = new dfns.Entity("Person");
		window.diagram.addEntity(entity);
	});
	it("should create an attribute", function() {
		var command = new dfns.CreateEntityAttributeCommand("Person:Name:String");
		var result = command.execute();

		expect(result).toEqual(true);
		expect(entity.attributes.length).toEqual(1);
		expect(entity.attributes[0].name).toEqual("Name");
		expect(entity.attributes[0].attrType).toEqual("String")

	});
	it("should not create an attribute when do not entity doesn't exist", function() {
		var command = new dfns.CreateEntityAttributeCommand("Persona:Name:String");
		var result = command.execute();

		expect(result).toEqual(false);
		expect(entity.attributes.length).toEqual(0);

	});
	it("should not create an attribute if it already exists", function() {
		var command = new dfns.CreateEntityAttributeCommand("Person:Name:String");
		var result = command.execute();

		expect(result).toEqual(true);
		expect(entity.attributes.length).toEqual(1);

		var result2 = command.execute();
		expect(result2).toEqual(false);

	});
});
describe("The Create Operation Command  ", function() {
	var entity;
	beforeEach(function() {
		window.diagram = new dfns.Diagram();
		entity = new dfns.Entity("Person");
		window.diagram.addEntity(entity);
	});
	it("should create an Operation", function() {
		var command = new dfns.CreateEntityOperationCommand("Person:Name:String");
		var result = command.execute();

		expect(result).toEqual(true);
		expect(entity.operation.length).toEqual(1);
		expect(entity.operation[0].opName).toEqual("Name");
		expect(entity.operation[0].opType).toEqual("String")
	});
	it("should not create an operation when do not entity doesn't exist", function() {
		var command = new dfns.CreateEntityOperationCommand("Persona:Name:String");
		var result = command.execute();

		expect(result).toEqual(false);
		expect(entity.operation.length).toEqual(0);

	});
	it("should not create an operation if it already exists", function() {
		var command = new dfns.CreateEntityOperationCommand("Person:Name:String");
		var result = command.execute();

		expect(result).toEqual(true);
		expect(entity.operation.length).toEqual(1);

		var result2 = command.execute();
		expect(result2).toEqual(false);

	});
});
describe('The Delete Entity Comand', function() {
	var entity;
	beforeEach(function() {
		window.diagram = new dfns.Diagram();
		entity = new dfns.Entity("Person");
		window.diagram.addEntity(entity);
		entity = new dfns.Entity("Public");
		window.diagram.addEntity(entity);
		entity = new dfns.Entity("Group");
		window.diagram.addEntity(entity);
	});
	it('Should Delete Entity ', function() {
		expect(window.diagram.entities.length).toEqual(3);
		var command = new dfns.DeleteEntityCommand("Public");
		var result = command.execute();

		expect(result).toEqual(true);
		expect(window.diagram.entities.length).toEqual(2);
	});

}); //end describe
describe('The Delete Attribute Comand', function() {
	var entity;
	beforeEach(function() {
		window.diagram = new dfns.Diagram();
		entity = new dfns.Entity("Person");
		window.diagram.addEntity(entity);
	});
	it('Should Delete Entity ', function() {
		var command = new dfns.CreateEntityAttributeCommand("Person:Name:String");
		var result = command.execute();
		expect(result).toEqual(true);
		command = new dfns.CreateEntityAttributeCommand("Person:Nome:Boolean");
		result = command.execute();
		expect(result).toEqual(true);
		expect(entity.attributes.length).toEqual(2);
		command = new dfns.DeleteEntityAttributeCommand("Person:Nome:Boolean");
		result = command.execute();

		expect(result).toEqual(true);
		expect(entity.attributes.length).toEqual(1);

	});

}); //end describe