
var globalX = 10;
var globalY = 40;
function changeXval(valX){
	globalX+=valX;
}
function changeYval(valY){
	globalY += valY; 
	globalX = 10;
	alert('changeYval' + globalY );
}
function checkCanvasWidth(boundaryRectangle){
	alert(boundaryRectangle);
	if (boundaryRectangle > document.getElementById("myCanvas").width )
	{
		changeYval(90);
	}
}
function canvasOn(){
	window.diagram = new Diagram();

}

function Diagram (titulo){
	  this.nomes = { 
	  	'nome': titulo,
	  	'idade': '30'
	  }
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


/*
when I type create attribute Person:name:String

ok-verify if the command starts with the (create attribute)
	(indexof)
ok-split the rest of the command, Person:name:String so I can get 
	method String.split
ok-the name of the entity I'm looking for.

The name of the attribute that I'm looking for

the type of the attribute that I'm looking for
find entity with name Person
	create a method on Diagram that will look for the Entity

create attribute inside the Entity
	you will create a property attributes = []
	create a method Entity.addAttribute(with a new Attribute with the name and type)

(create a new Attribute Class with Name=name of the attribute and 
type=type of the attribute enter on the command line, 
add the attribute into an array that Entity has)

drawTheAttribute.
*/
function drawCanvas(){

	var c = document.getElementById("myCanvas");
	//alert (c.width)
	var ctx = c.getContext("2d");
    //Clearing the Canvas
    c.width = c.width;
	//x += 
	//new Entity(tittleEntity,x,y).draw(ctx);
	
	for(var i=0;i<window.diagram.entities.length;i++){
	    window.diagram.entities[i].draw(ctx);
	}
	//x += 200;
	//new Entity('SomeLongClassName',x,40).draw(ctx);
}
function commitButton(){
	var name =(document.getElementById("commandLine").value).trim();
	var command1 = "create entity ";
	var command2 = "create attribute ";
	var startIndex = name.indexOf(command1);
	if (startIndex==0) {
	 	name = name.substring(startIndex + command1.length);
		window.diagram.addEntity(new Entity(name,globalX,globalY));
		globalX += 300;
		drawCanvas();
	}
	else if (name.indexOf(command2)==0){
	 	var splitName= [];
	 	
	 	splitName = name.substring(startIndex + command2.length).split(':');

	 	var entityPosition = window.diagram.findEntity(splitName[0])
	 	if (entityPosition == null){
	 		
	 	}
	 	else
	 	{
	 		window.diagram.entities[entityPosition].addAttribute(splitName[1],splitName[2])	 
	 	};
	}

	// document.getElementById("myCanvas").width = 200;
	// document.getElementById("myCanvas").height = 100;
	//var myLength = ;
	//alert(name);

}

var Entity=function(name, x, y){
	function findEntityWidth(){
		 if((name.length * 15)> 90){
		 	return name.length * 13;
		 }
		 else
		 {
		 	
		 	return 90;
		 } ;
	}
	var self=this;
	this.name = name;
	this.attributes = [];
	this.addAttribute= function (attName,attType){
		//if doesn't find attribute with same name, then add!
		if (attributeDoesntExist(attName)){
			this.attributes.push(new Attribute(attName,attType));
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
	this.draw=function(ctx){
		//ctx.fillStyle = "yellow";
		ctx.strokeStyle="black";
		var w = findEntityWidth();
		//checkCanvasWidth(x+w);
/*		if (x+w > document.getElementById("myCanvas").width )
		{
			changeYval(90);
			y += 90;
			x = 10;
		}
*/
		ctx.moveTo(x,y+30);
		ctx.lineTo(x+w,y+30);
		ctx.stroke();
		//ctx.fillRect(x,y,w,75);
		ctx.strokeRect(x,y,w,75);
		ctx.font = "20px Arial";
		ctx.fillText(name,x+20,y+20);

		//changeXval(w+20) ;
		// ctx.moveTo(100,20);
		// ctx.lineTo(100,50);
		// ctx.stroke();	
	};
};

var Attribute = function(attName, attType){
	this.attName = attName;
	this.attType = attType;
	//this.visibility
}