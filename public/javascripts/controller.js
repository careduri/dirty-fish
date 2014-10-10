//controller.js
(function (module){

var Controller = function(){

}

Controller.prototype.initialize = function(){
	this.diagram = new Diagram();
}
exports.controller = new Controller();

})(exports);