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
		}
	};

	module.CreateEntityCommand = function(commandLine) {
		this.commandLine = commandLine;

	};

	module.CreateEntityCommand.prototype.execute = function() {
		var existing= window.diagram.findEntity(this.commandLine);
		if (!existing) {
			var newEntity = new module.Entity(this.commandLine);
			window.diagram.addEntity(newEntity);
			return true;
		}
		return false;
	};

	module.CreateEntityAttributeCommand = function(commandLine) {
		this.commandLine = commandLine;
	}

})(dfns);