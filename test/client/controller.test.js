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