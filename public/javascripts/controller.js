if (typeof dfns == 'undefined') {
	dfns = {};
}
//controller.js

(function(module) {

	var Controller = function() {

	};

	Controller.prototype.initialize = function() {
		this.diagram = new dfns.Diagram();
	}

	module.controller = new Controller();

	// Command Factory 
	//

	module.commandFactory = {
		CREATE_ENTITY: "create entity ",
		CREATE_ENTITY_ATTRIBUTE: "create attribute ",
		CREATE_ENTITY_OPERATION: "create operation ",	
		DELETE_ENTITY: "delete entity ",
		getCommand: function(commandString) {
			var trimmedCommandString = commandString.trim();

			function startsWith(prefix) {
				return trimmedCommandString.indexOf(prefix) == 0;
			}

			function stripCommand(prefix) {
				return trimmedCommandString.substr(prefix.length);
			}

			if (startsWith(this.CREATE_ENTITY))
				return new module.CreateEntityCommand(stripCommand(this.CREATE_ENTITY));
			if (startsWith(this.CREATE_ENTITY_ATTRIBUTE))
				return new module.CreateEntityAttributeCommand(stripCommand(this.CREATE_ENTITY_ATTRIBUTE));
			if (startsWith(this.CREATE_ENTITY_OPERATION))
				return new module.CreateEntityOperationCommand(stripCommand(this.CREATE_ENTITY_OPERATION));
			if (startsWith(this.DELETE_ENTITY))
				return new module.DeleteEntityCommand(stripCommand(this.DELETE_ENTITY));
		}
	};
    //   ---------------Entity------------------------
	module.CreateEntityCommand = function(commandLine) {
		this.commandLine = commandLine;

	};


	module.CreateEntityCommand.prototype.execute = function() {
		var existing = window.diagram.findEntity(this.commandLine);
		if (!existing) {
			var newEntity = new module.Entity(this.commandLine);
			window.diagram.addEntity(newEntity);
			return true;
		}
		return false;
	};
	module.DeleteEntityCommand = function(commandLine) {
		
		this.commandLine = commandLine;

	};
	module.DeleteEntityCommand.prototype.execute = function() {
		var position = window.diagram.findPositionEntity(this.commandLine);
		if (position != null) {
		
			window.diagram.delEntity(position);
			return true;
		}
		return false;
	};

	//------------------Attribute ---------------------

	module.CreateEntityAttributeCommand = function(commandLine) {
		this.commandLine = commandLine;
	};

	module.CreateEntityAttributeCommand.prototype.execute = function() {
		var commandLineSplitted = this.commandLine.split(":");
		var entityName = commandLineSplitted[0];
		var entityFound = window.diagram.findEntity(entityName);
		if (!entityFound) {
			return false;
		}		
		 return !!entityFound.addAttribute(commandLineSplitted[1], commandLineSplitted[2]);
		

	};
	module.DeleteEntityAttributeCommand = function(commandLine) {
		this.commandLine = commandLine;
	};

	module.DeleteEntityAttributeCommand.prototype.execute = function() {
		var commandLineSplitted = this.commandLine.split(":");
		var entityName = commandLineSplitted[0];
		var entityFound = window.diagram.findEntity(entityName);
		if (entityFound != null) {
			
			return entityFound.delAttribute(commandLineSplitted[1], commandLineSplitted[2]);
		}
		else { 
			return false;
		}		
		 

	};

	// --------------- Operation ----------------
	module.CreateEntityOperationCommand = function(commandLine) {
		this.commandLine = commandLine;
	};

	module.CreateEntityOperationCommand.prototype.execute = function() {
		var commandLineSplitted = this.commandLine.split(":");
		var entityName = commandLineSplitted[0];
		var entityFound = window.diagram.findEntity(entityName);
		if (!entityFound) {
			
			return false;
		}

		 return !!entityFound.addOperation(commandLineSplitted[1], commandLineSplitted[2]);
		

	};



})(dfns);