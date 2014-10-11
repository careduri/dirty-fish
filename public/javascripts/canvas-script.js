
var globalX = 10;
var globalY = 40;
function changeXval(valX){
	globalX+=valX;
}
function changeYval(valY){
	globalY += valY; 
	globalX = 10;
}
function checkCanvasWidth(boundaryRectangle){

	if (boundaryRectangle > document.getElementById("myCanvas").width )
	{
		changeYval(90);
	}
}
function canvasOn(){
	window.diagram = new Diagram();

}

function Diagram (titulo){

	  this.entities = []; //new Array()
	  this.addEntity = function(entity)
	  {
	  	this.entities.push(entity);
	  }
	  this.findEntity= function ( loockingEntity){
	  	
	  	for(var i=0;i<window.diagram.entities.length;i++){
	  		if (loockingEntity.trim() == window.diagram.entities[i].name){
	  			return i;
	  		}
	  	}	
	  	return null;  	
	}
} 


function drawCanvas(){

	var c = document.getElementById("myCanvas");
	//alert (c.width)
	var ctx = c.getContext("2d");
    //Clearing the Canvas
    c.width = c.width;

	
	for(var i=0;i<window.diagram.entities.length;i++){
	    window.diagram.entities[i].draw(ctx);
	}

}



function commitButton(){
	var name =(document.getElementById("commandLine").value).trim();
	var command1 = "create entity ";
	var command2 = "create attribute ";
	var command3 = "create operation ";
	var startIndex = name.indexOf(command1);
	var nameSplit = [];
/*	nameSplit = name.split (' ');
	console.log(nameSplit);
*/



	if (startIndex==0) {
	 	name = name.substring(startIndex + command1.length);
		window.diagram.addEntity(new Entity(name,globalX,globalY));
		globalX += 300;
		drawCanvas();
	};
	if (name.indexOf(command2)==0){
	 	var splitName= [];
	 	
	 	splitName = name.substring(startIndex + command2.length).split(':');

	 	var entityPosition = window.diagram.findEntity(splitName[0])
	 	if (entityPosition == null){
	 		
	 	}
	 	else
	 	{
	 		window.diagram.entities[entityPosition].addAttribute(splitName[1],splitName[2]);
	 		drawCanvas();	 

	 	};
	}
	if (name.indexOf(command3)==0){
	 	var splitName= [];
	 	
	 	splitName = name.substring(startIndex + command3.length).split(':');

	 	var entityPosition = window.diagram.findEntity(splitName[0])
	 	if (entityPosition == null){
	 		
	 	}
	 	else
	 	{
	 		window.diagram.entities[entityPosition].addOperation(splitName[1],splitName[2]);
	 		drawCanvas();	 

	 	};
	}	


}

var Entity=function(name, x, y){
	var self=this;
	this.name = name;
	this.attributes = [];
	this.operation = [];


	function findEntityWidth(){
		 if((name.length * 10)> 90){
		 	return name.length * 10;
		 }
		 else
		 {
		 	
		 	return 90;
		 } ;
	}

	this.addAttribute= function (attName,attType){
		//if doesn't find attribute with same name, then add!
		if (attributeDoesntExist(attName)){
			this.attributes.push(new Attribute(attName,attType));
		}else {
			console.log("Already exist");
		}
	}
	this.addOperation= function (opName,opType){
		//if doesn't find attribute with same name, then add!
		if (operationDoesntExist(opName)){
			this.operation.push(new Operation(opName,opType));
		}else {
			console.log("Already exist");
		}
	}

	var attributeDoesntExist=function(attName){

		for (var i=0;i<self.attributes.length;i++){

			if(self.attributes[i].attName.trim()==attName.trim){
				return false;
			}
		}
		return true;
	}
	var operationDoesntExist=function(opName){

		for (var i=0;i<self.operation.length;i++){

			if(self.operation[i].opName.trim()==opName.trim){
				return false;
			}
		}
		return true;
	}
	this.draw=function(ctx){

		ctx.strokeStyle="black";
		var w = findEntityWidth();


		ctx.font = "12px Arial";
		ctx.fillText(name,x+20,y+20);
		var heightOfRect = 45
		for (var i=0;i<self.attributes.length;i++ ){
			var nameAtt = self.attributes[i].attName + 
				':' + self.attributes[i].attType;
			ctx.fillText(nameAtt,x+20,y+ heightOfRect);
		 	heightOfRect+=20
		 	if (w < nameAtt.length*10){
		 		w=nameAtt.length*10;
		 	};
		}
		for (var i=0;i<self.operation.length;i++ ){
			var nameOp = self.operation[i].opName + 
				':' + self.operation[i].opType;
			ctx.fillText(nameOp,x+20,y+ heightOfRect);
		 	heightOfRect+=20
		 	if (w < nameOp.length*10){
		 		w=nameOp.length*10;
		 	};
		}		
		ctx.moveTo(x,y+30);
		ctx.lineTo(x+w,y+30);
		ctx.stroke();		
		ctx.strokeRect(x,y,w, heightOfRect + 10);

	};

	this.writeAttribute=function(){

	};
};

var Attribute = function(attName, attType){
	this.attName = attName;
	this.attType = attType;
	//this.visibility
}
var Operation = function(opName, opType){
	this.opName = opName;
	this.opType = opType;
	//this.visibility
}
