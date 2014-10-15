describe('The Controller module', function() {
    it('Should be able to have an Diagram ', function() {
        expect(dfns.controller).toBeDefined();
    });

}); //end describe

describe("The Command factory ", function(){
	it ("should be defined", function(){
		expect(dfns.commandFactory).toBeDefined();
	});
	it ("should have a create entity command", function (){
		expect(dfns.CreateEntityCommand).toBeDefined();
	});
	it ("should have a create attribute entity command", function (){
		expect(dfns.CreateEntityAttributeCommand).toBeDefined();
	});


	it ("should create a create entity command when the user enters: create entity entity name", function (){
		var command = dfns.commandFactory.getCommand("create entity entityName");
		expect(dfns.CreateEntityCommand).toEqual( command.constructor  );
		expect("entityName").toEqual(command.commandLine);
	});
	it ("should create a create attribute command  the user enters: create attribute entityName:AttributeName", function (){
		var command = dfns.commandFactory.getCommand("create attribute entityName:attributeName");
		expect(dfns.CreateEntityAttributeCommand).toEqual( command.constructor  );
		expect("entityName:attributeName").toEqual(command.commandLine);
	});

});


describe("The Create Entity Command  ", function(){
	beforeEach(function(){
		window.diagram = new dfns.Diagram();
	});
	it("should create an entity when executed", function(){
		var command = new dfns.CreateEntityCommand("Person");
		expect(command.execute()).toEqual(true);
		expect(window.diagram.entities.length).toEqual(1);
		expect(window.diagram.entities[0].name).toEqual("Person");
	});
	it("should return false if entity already exists", function(){
		window.diagram.addEntity(new dfns.Entity("Person"));
		expect(window.diagram.entities.length).toEqual(1);

		var command = new dfns.CreateEntityCommand("Person");
		expect(false).toEqual(command.execute());

		expect(window.diagram.entities.length).toEqual(1);
	});
});