export.Entity = function(name){
	//private
	var name = name;
	//public 
	this.position = new Position(0,0);
	this.dimension = new Dimension(100,100);
	var attributes = [];
	this.addAttribute(String attributeName, String attrType){
		attributes.push(new Attribute(attributeName, attrType));
	}
};
var e = new Entity("this is a name");
e.position.x = 30;
e.position.y = 30;
e.name = name;

var myfunctionreference = function(a, b){return a +b;};
myfunctionreference(3, 4);

function sum(a, b){ return a + b};

console.log(sum(a, b));


var Position = function(x, y){
	this.x = x;
	this.y = y;
};

var Attribute = function(name, attrType){
	this.name = name;
	this.attrType = attrType || 'Object';
}
var a = new Attribute("age");
var b = new Attribute("weight", "int");

var Dimension = function(w, h){
	this.width = w;
	this.height = h;
}


// public class Entity{
	 public Entity(String name){
	 	this.name = name;
	 }
//    string name;
//    Position postion = new Position();
//    Dimension dimenion = new Dimension();
//    Attributes[] attributes = new Attributes[]();
// }
// public class Position {
// 	int X;
// 	int Y;
// }

// public class Dimension {
// 	int height;
// 	int width;
// }
// public class Attributes{
// 	string name;
// 	string type;
// }


function( commandLine) {

	if (commandLine.startsWith(  'create entity' ))
	{
		session.createEntity(getEntityName(commandLine));

	} elseif (commandLine == 'create attribute') {
		session.getEntity(getEntityName(commandLine)).addAttribute(getAttributeName(commandLine), getAttributeType(commandLine))
	}

	
	printEntitiesToCanvas(session);

}