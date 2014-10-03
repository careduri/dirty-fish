function drawCanvas(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var x = 10;
	new Entity('Titulo',x,40).draw(ctx);
	x += 200;
	new Entity('SomeLongClassName',x,40).draw(ctx);
}
function commitButton(){
	// document.getElementById("myCanvas").width = 200;
	// document.getElementById("myCanvas").height = 100;
	drawCanvas();

}

var Entity=function(name,x,y){
	function findEntityWidth(ctx){
		return name.length * 15;
	}
	this.draw=function(ctx){
		//ctx.fillStyle = "yellow";
		ctx.strokeStyle="black";
		var w = findEntityWidth(ctx);
		ctx.moveTo(x,y+30);
		ctx.lineTo(x+w,y+30);
		ctx.stroke();
		//ctx.fillRect(x,y,w,75);
		ctx.strokeRect(x,y,w,75);
		ctx.font = "20px Arial";
		ctx.fillText(name,x+20,y+20);

		

		// ctx.moveTo(100,20);
		// ctx.lineTo(100,50);
		// ctx.stroke();	
	};
};