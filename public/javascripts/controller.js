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

})(dfns);