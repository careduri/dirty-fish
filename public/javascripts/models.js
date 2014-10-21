if (typeof dfns == 'undefined') {
	dfns = {};
}

(function(module) {
	var globalX = 10;
	var globalY = 40;

	function changeXval(valX) {
		globalX += valX;
	};

	function changeYval(valY) {
		globalY += valY;
		globalX = 10;
		alert('changeYval' + globalY);
	};

	function checkCanvasWidth(boundaryRectangle) {
		alert(boundaryRectangle);
		if (boundaryRectangle > document.getElementById("myCanvas").width) {
			changeYval(90);
		}
	};

	function canvasOn() {
		window.diagram = new Diagram();

	};

	module.Diagram = function() {
		this.entities = []; //new Array()
		this.addEntity = function(entity) {
			this.entities.push(entity);
		};
		this.delEntity = function(positionEntity){
			//delete this.entities[positionEntity];
			this.entities.splice(positionEntity,1);	
		}
		this.findEntity = function(loockingEntity) {

			for (var i = 0; i < window.diagram.entities.length; i++) {
				if (loockingEntity == this.entities[i].name) {

					return this.entities[i];
					//return i;
				}
			}
			return null;
		};
		this.findPositionEntity = function(loockingEntity) {

			for (var i = 0; i < window.diagram.entities.length; i++) {
				if (loockingEntity == this.entities[i].name) {

					return i;
				}
			}
			return null;
		};
	};

	function drawCanvas() {

		var c = document.getElementById("myCanvas");
		//alert (c.width)
		var ctx = c.getContext("2d");
		//Clearing the Canvas
		c.width = c.width;
		//x += 
		//new Entity(tittleEntity,x,y).draw(ctx);

		for (var i = 0; i < window.diagram.entities.length; i++) {
			window.diagram.entities[i].draw(ctx);
		}
		//x += 200;
		//new Entity('SomeLongClassName',x,40).draw(ctx);
	};

			function commitButton() {
			var name = (document.getElementById("commandLine").value).trim();
			var command1 = "create entity ";
			var command2 = "create attribute ";
			var startIndex = name.indexOf(command1);
			if (startIndex == 0) {
				name = name.substring(startIndex + command1.length);
				window.diagram.addEntity(new Entity(name, globalX, globalY));
				globalX += 300;
				drawCanvas();
			} 
			else if (name.indexOf(command2) == 0) {
				var splitName = [];

				splitName = name.substring(startIndex + command2.length).split(':');

				var entityPosition = window.diagram.findEntity(splitName[0])
				if (entityPosition == null) {

				} else {
					window.diagram.entities[entityPosition].addAttribute(splitName[1], splitName[2])
				}
			}
		};

	module.Entity = function(name, x, y) {
		function findEntityWidth() {
			if ((name.length * 15) > 90) {
				return name.length * 13;
			} else {

				return 90;
			};
		};
		var self = this;
		this.name = name || "Entity"; // name ? name : "Entity"
		this.attributes = [];
		this.operation = [];
		this.x = x || 0;
		this.y = y || 0;

		this.addAttribute = function(name, attrType) {

			var attributeDoesntExist = function() {
					for (var i = 0; i < self.attributes.length; i++) {
						if (self.attributes[i].name == trimName) {
							return false;
						}
					}
					return true;
				}
				//if doesn't find attribute with same name, then add!
			var trimName = name.trim();
			var trimAttrType = attrType.trim();
			if (attributeDoesntExist(trimName)) {

				var newAttribute = new module.Attribute(trimName, trimAttrType);
				this.attributes.push(newAttribute);
				return newAttribute;
			} else {
				return null;
			}
		}
		this.delAttribute = function(name, attrType) {

			var attributePosition = function() {
					for (var i = 0; i < self.attributes.length; i++) {
						if (self.attributes[i].name == trimName) {
							return i;
						}
					}
					return null;
				}
				//if doesn't find attribute with same name, then add!
			var trimName = name.trim();
			var trimAttrType = attrType.trim();
			var numberPosition = attributePosition(trimName);
			if ( numberPosition !=null ) {
				this.attributes.splice(numberPosition, 1);
				return true;
			} else {
				return false;
			}
		}

		this.addOperation = function(opName, opType) {

			var operationDoesntExist = function(opName) {

				for (var i = 0; i < self.operation.length; i++) {

					if (self.operation[i].opName.trim() == trimName) {
						return false;
					}
				}
				return true;
			}
			var trimName = opName.trim();
			var trimOpType = opType.trim();
			if (operationDoesntExist(trimName)) {
				var newOperation = new module.Operation(trimName, trimOpType);
				this.operation.push(newOperation);
				return newOperation;
			} else {
				return null;
			}
		}
		return true;
	};

	this.draw = function(ctx) {

		ctx.strokeStyle = "black";
		var w = findEntityWidth();

		ctx.moveTo(x, y + 30);
		ctx.lineTo(x + w, y + 30);
		ctx.stroke();

		ctx.strokeRect(x, y, w, 75);
		ctx.font = "20px Arial";
		ctx.fillText(name, x + 20, y + 20);

	};
	var Attribute = module.Attribute = function(name, attrType) {
		this.name = name || "attrName";
		this.attrType = attrType || "String";
		//this.visibility
	}
	var Operation = module.Operation = function(opName, opType){
	this.opName = opName;
	this.opType = opType;
	//this.visibility
	}
})(dfns);