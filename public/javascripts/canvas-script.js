
var x = 10;
var y = 40
function changeXval(valX){
	x+=valX;
}
function changeYval(valY){
	y += valY; 
	x = 10;
	alert('changeYval' + y)
}
function checkCanvasWidth(boundaryRectangle){
	alert(boundaryRectangle);
	if (boundaryRectangle > document.getElementById("myCanvas").width )
	{
		changeYval(90);
	}
}
function drawCanvas(tittleEntity){
	var c = document.getElementById("myCanvas");
	//alert (c.width)
	var ctx = c.getContext("2d");	
	//x += 
	new Entity(tittleEntity,x,y).draw(ctx);
	//x += 200;
	//new Entity('SomeLongClassName',x,40).draw(ctx);

}
function commitButton(name){
	// document.getElementById("myCanvas").width = 200;
	// document.getElementById("myCanvas").height = 100;
	//var myLength = ;
	//alert(name);

	drawCanvas(name);

}

var Entity=function(name,x,y){
	function findEntityWidth(){
		 if((name.length * 15)> 90){
		 	return name.length * 13;
		 }
		 else
		 {
		 	
		 	return 90;
		 } ;
	}

	this.draw=function(ctx){
		//ctx.fillStyle = "yellow";
		ctx.strokeStyle="black";
		var w = findEntityWidth();
		//checkCanvasWidth(x+w);
		if (x+w > document.getElementById("myCanvas").width )
		{
			changeYval(90);
			y += 90;
			x = 10;
		}

		ctx.moveTo(x,y+30);
		ctx.lineTo(x+w,y+30);
		ctx.stroke();
		//ctx.fillRect(x,y,w,75);
		ctx.strokeRect(x,y,w,75);
		ctx.font = "20px Arial";
		ctx.fillText(name,x+20,y+20);

		changeXval(w+20) ;
        

		// ctx.moveTo(100,20);
		// ctx.lineTo(100,50);
		// ctx.stroke();	
	};
};