// Start of JQuery Code

$("document").ready(function(){

/*	$("#moveme").contextmenu(function(){
		return false;
	})*/

	$("#moveme").on("mouseover", function(){
		$("#moveme img").attr("src", "airplane.png");
	})

	$("#moveme").on("mousemove", function(e){
		x = e.pageX;
		y = e.pageY;
		$("#moveme").css({
			// "position": "fixed",
			"top": y-128,
			"left": x-128
		})
		$("#demo").text("x:" + x + "/y:" + y);
	});

	$("#moveme").click(function(e){
		console.log(e.which);
		$(this).animate({
			top: windowHeight-200, //could have used bottom
			opacity: 0
		},1000, crash).animate({
			// deg: 180,
			opacity: 1
		},1000);
	});

	$("#moveme").contextmenu(function(e){ //RIGHT CLICK EVENT (e.which==2 didn't work)
		document.getElementById('boost').play();
		$("#moveme img").attr("src","airplane-boost.png");
		setTimeout(function(){
			$("#moveme img").attr("src","airplane.png")
		},2500)
		return false; //disables the context menu
	});

});
// End of JQuery Code

function crash(){
	document.getElementById('crash').play();
	$("#moveme img").attr("src","airplane-crashed.png");
}

var windowHeight = window.innerHeight;